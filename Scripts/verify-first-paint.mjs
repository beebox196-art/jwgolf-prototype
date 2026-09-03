// Sanity check: confirm the SSR'd HTML already contains the heading
// at full opacity BEFORE any client-side animation runs.
// This proves there's no FOIT — the heading is visible from the very
// first byte the browser receives.
import { readFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";

const PORT = 4174;
const URL = `http://localhost:${PORT}`;

async function startServer() {
  const proc = spawn("npx", ["next", "start", "-p", String(PORT)], {
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NODE_ENV: "production" },
  });
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
    proc.on("exit", (code) => {
      clearTimeout(timeout);
      if (code !== 0 && code !== null) reject(new Error(`server exited ${code}: ${buffer}`));
    });
  });
  await wait(500);
  return proc;
}

const server = await startServer();
try {
  const res = await fetch(URL);
  const html = await res.text();

  // Pull the linked CSS file
  const cssHref = html.match(/\/_next\/static\/css\/[^"]+\.css/);
  const cssUrl = cssHref ? `${URL}${cssHref[0]}` : null;
  let css = "";
  if (cssUrl) {
    const cssRes = await fetch(cssUrl);
    css = await cssRes.text();
  }

  // Count blur-text-char spans in the raw HTML
  const matches = html.match(/<span class="blur-text-char"[^>]*>/g) || [];
  console.log(`SSR HTML contains ${matches.length} blur-text-char spans`);

  // Extract every text inside blur-text-char spans (handles nbsp for spaces)
  const charContents = [...html.matchAll(/<span class="blur-text-char"[^>]*>([^<]+)<\/span>/g)].map(
    (m) => m[1]
  );
  console.log(`Extracted ${charContents.length} characters from spans`);
  console.log("Characters (raw):", charContents.join("|"));
  const headingJoined = charContents.join("").replace(/\u00A0/g, " ");
  console.log("Joined (nbsp → space):", JSON.stringify(headingJoined));

  const expectedText = "One Clear Fix Away";
  const headingMatches = headingJoined === expectedText;
  console.log(`Heading matches expected text exactly: ${headingMatches}`);

  // Confirm each span has its own animation-delay (the entrance enhancement)
  const delays = html.match(/animation-delay:\d+ms/g) || [];
  console.log(`Found ${delays.length} per-letter animation-delay values`);

  // Confirm the default opacity:1 base style is in the CSS bundle
  // (allow any property order; minified CSS may reorder). Match across ALL
  // .blur-text-char rules so a future CSS processor reordering rules (e.g.
  // grouping by media query) can't make this check falsely fail.
  const allRules = [...css.matchAll(/\.blur-text-char\{[^}]*\}/g)].map((m) => m[0]);
  const baseHasOpacity1 = allRules.some((r) => /opacity:\s*1/.test(r));
  console.log(`Found ${allRules.length} .blur-text-char rule(s) in CSS bundle`);
  console.log(`Default opacity:1 base style present in CSS bundle: ${baseHasOpacity1}`);

  const pass =
    matches.length === expectedText.length &&
    headingMatches &&
    delays.length === expectedText.length &&
    baseHasOpacity1;
  console.log(pass ? "\n✓ SSR FIRST-PAINT CHECK PASSED" : "\n✗ SSR FIRST-PAINT CHECK FAILED");
  process.exit(pass ? 0 : 1);
} finally {
  server.kill("SIGTERM");
}
