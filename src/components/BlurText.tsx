"use client";

import { useEffect, useState } from "react";

interface BlurTextProps {
  text: string;
  speed?: number; // ms per character
  delay?: number; // ms before starting
  className?: string;
  revealedClassName?: string;
}

/**
 * BlurText — Text focus-in reveal component for hero headlines.
 *
 * Letters start blurred, then focus in sequentially.
 * Uses CSS filter: blur() animation with configurable speed and delay.
 *
 * Robustness: a safety timeout forces every letter visible after the full
 * animation window, so the heading can never get stuck showing only the
 * first character — even if the sequential reveal is interrupted, the
 * browser fails to repaint, or the effect is re-triggered on scroll.
 */
export default function BlurText({
  text,
  speed = 60,
  delay = 200,
  className = "",
  revealedClassName = "is-revealed",
}: BlurTextProps) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    // Start revealing after initial delay
    const startTimeout = setTimeout(() => {
      text.split("").forEach((_, index) => {
        const t = setTimeout(() => {
          setRevealed((prev) => new Set(prev).add(index));
        }, index * speed);
        timeouts.push(t);
      });
    }, delay);

    timeouts.push(startTimeout);

    // Safety net: force every letter visible after the full animation window.
    // Guarantees the heading is never stuck partially revealed.
    const totalDuration = delay + text.length * speed + 500;
    const safetyTimeout = setTimeout(() => {
      setRevealed(new Set(text.split("").map((_, i) => i)));
    }, totalDuration);
    timeouts.push(safetyTimeout);

    return () => timeouts.forEach(clearTimeout);
  }, [text, speed, delay]);

  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => {
        const isRevealed = revealed.has(index);
        const isSpace = char === " ";

        return (
          <span
            key={index}
            className={`blur-text-char is-animating ${isRevealed ? revealedClassName : ""}`}
            style={{
              transitionDelay: `${index * speed}ms`,
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
