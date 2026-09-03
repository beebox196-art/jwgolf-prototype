"use client";

interface BlurTextProps {
  text: string;
  speed?: number; // ms per character stagger
  delay?: number; // ms before starting
  className?: string;
}

/**
 * BlurText — Text focus-in reveal for hero headlines.
 *
 * Robustness model (the key invariant):
 *   The default CSS state of every letter is fully visible
 *   (opacity 1, no transform). The reveal is a pure CSS keyframe
 *   animation that runs once on mount and ends at the same visible
 *   state. `animation-fill-mode: backwards` keeps the `from` state
 *   applied during the per-letter delay window so the staggered
 *   focus-in reads correctly; after the animation completes each
 *   letter returns to its base (fully visible) state.
 *
 *   There is no JS state for visibility — no useEffect, no setTimeout,
 *   no setState. This means:
 *     - SSR/SSG renders text fully visible.
 *     - If hydration fails, JS is disabled, or React throws, the
 *       text remains at the default (fully visible) state.
 *     - The animation always converges to the visible state and stays
 *       there. It can never leave the heading invisible.
 *     - On client-side navigation the component re-mounts and the
 *       animation re-runs, but always ends at the visible state.
 *
 *   The per-letter stagger uses `animation-delay` so each letter
 *   focuses in sequentially.
 */
export default function BlurText({
  text,
  speed = 60,
  delay = 200,
  className = "",
}: BlurTextProps) {
  const chars = text.split("");

  return (
    <span className={`inline-block ${className}`}>
      {chars.map((char, index) => {
        const isSpace = char === " ";
        return (
          <span
            key={index}
            className="blur-text-char"
            style={{
              animationDelay: `${delay + index * speed}ms`,
              minWidth: isSpace ? "0.3em" : undefined,
            }}
          >
            {isSpace ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}
