// Headless verification: BlurText heading letters must reach opacity 1
// after page load, after scrolling, and after a hard refresh.
// This is a one-off verification script — not part of the shipped app.

import puppeteer from "puppeteer";
import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";

const PORT = 4173;
const URL = `http://localhost:${PORT}`;
const HEADING_TEXT = "One Clear Fix Away";

async function startServer() {
  const proc = spawn("npx", ["next", "start", "-p", String(PORT)], {
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NODE_ENV: "production" },
  });
  // Wait for "Ready" / first request success
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("server start timeout")), 30000);
    let buffer = "";
    proc.stdout.on("data", (chunk) => {
      buffer += chunk.toString();
      if (buffer.includes("Ready") || buffer.includes("started server")) {
        clearTimeout(timeout);
        resolve();
      }
    });
    proc.stderr.on("data", (chunk) => {
      // next start writes Ready on stdout; ignore stderr unless we fail
    });
    proc.on("exit", (code) => {
      clearTimeout(timeout);
      if (code !== 0 && code !== null) reject(new Error(`server exited ${code}: ${buffer}`));
    });
  });
  // Extra settle
  await wait(500);
  return proc;
}

async function inspectHeading(page, label) {
  // Wait for the hero h1 to be present and contain our text
  await page.waitForFunction(
    (needle) => {
      const h1s = Array.from(document.querySelectorAll("h1"));
      return h1s.some((h1) => {
        const txt = (h1.textContent || "").replace(/\s+/g, " ");
        return txt.includes(needle);
      });
    },
    { timeout: 15000 },
    HEADING_TEXT
  );

  const result = await page.evaluate((needle) => {
    const h1 = Array.from(document.querySelectorAll("h1")).find((el) => {
      const txt = (el.textContent || "").replace(/\s+/g, " ");
      return txt.includes(needle);
    });
    if (!h1) return { ok: false, reason: "h1 not found" };

    const chars = Array.from(h1.querySelectorAll(".blur-text-char"));
    if (chars.length === 0) return { ok: false, reason: "no .blur-text-char children" };

    const computed = chars.map((el) => {
      const cs = window.getComputedStyle(el);
      return {
        char: el.textContent,
        opacity: parseFloat(cs.opacity),
        transform: cs.transform,
        animationName: cs.animationName,
      };
    });

    const allVisible = computed.every((c) => c.opacity >= 0.99);
    const expectedChars = needle.split("").length;
    return {
      ok: true,
      charCount: chars.length,
      expectedChars,
      allVisible,
      minOpacity: Math.min(...computed.map((c) => c.opacity)),
      maxOpacity: Math.max(...computed.map((c) => c.opacity)),
      sample: computed.slice(0, 3),
      lastChar: computed[computed.length - 1],
      h1Text: (h1.textContent || "").replace(/\s+/g, " "),
    };
  }, HEADING_TEXT);

  console.log(`[${label}]`, JSON.stringify(result, null, 2));
  return result;
}

async function run() {
  const server = await startServer();
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // ── Phase 1: Initial load ───────────────────────────────────────────
    await page.goto(URL, { waitUntil: "networkidle0" });
    // Give the entrance animation time to settle (max ~1.8s for "One Clear Fix Away")
    await wait(2500);
    const initial = await inspectHeading(page, "initial-load");

    // ── Phase 2: Scroll down + back up ─────────────────────────────────
    await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
    await wait(500);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await wait(2500);
    const afterScroll = await inspectHeading(page, "after-scroll");

    // ── Phase 3: Hard refresh ───────────────────────────────────────────
    await page.reload({ waitUntil: "networkidle0" });
    await wait(2500);
    const afterRefresh = await inspectHeading(page, "after-refresh");

    // ── Phase 4: SSR HTML check — must render visible text ─────────────
    const ssrHtml = await (await fetch(URL)).text();
    const ssrHasBlurChars = ssrHtml.includes("blur-text-char");
    const ssrHasHeadingText = ssrHtml.includes("One Clear Fix Away");
    console.log("[ssr-check]", { ssrHasBlurChars, ssrHasHeadingText });

    // ── Summary ─────────────────────────────────────────────────────────
    const phases = [
      ["initial-load", initial],
      ["after-scroll", afterScroll],
      ["after-refresh", afterRefresh],
    ];
    let pass = ssrHasBlurChars && ssrHasHeadingText;
    for (const [name, r] of phases) {
      const ok =
        r.ok &&
        r.allVisible &&
        r.charCount === r.expectedChars &&
        r.minOpacity >= 0.99;
      console.log(`${ok ? "PASS" : "FAIL"} ${name}`);
      if (!ok) pass = false;
    }
    console.log(pass ? "\n✓ ALL CHECKS PASSED" : "\n✗ SOME CHECKS FAILED");
    process.exit(pass ? 0 : 1);
  } finally {
    if (browser) await browser.close();
    server.kill("SIGTERM");
  }
}

run().catch((err) => {
  console.error("verify-blurtext.mjs crashed:", err);
  process.exit(2);
});
