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
 * Runs the reveal on every mount (no persistent ref guard) so the
 * animation replays correctly on refresh and client-side navigation.
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
            className={`blur-text-char ${isRevealed ? revealedClassName : ""}`}
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
