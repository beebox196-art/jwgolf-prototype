"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * FairwayPath — Scroll-triggered gold line that traces the scroll journey.
 *
 * Draws a 1px gold line as the user scrolls from top to bottom.
 * Uses requestAnimationFrame for smooth updates.
 * Hidden on mobile, shown on md+ screens.
 */
export default function FairwayPath() {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
    setProgress(Math.min(Math.max(scrollProgress, 0), 1));
  }, []);

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial state

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);

  // SVG path: a subtle curved line from top to bottom
  // The line has a gentle S-curve to feel organic, like a ball flight
  const linePath = "M 30,0 Q 60,200 30,400 T 30,800 T 50,1200 T 30,1600 T 40,2000 T 30,2400 T 50,2800 T 30,3200 T 40,3600 T 30,4000";

  // Calculate the stroke-dashoffset based on progress
  const totalLength = 4000; // Approximate path length
  const dashOffset = totalLength * (1 - progress);

  return (
    <div
      className="hidden md:block fixed left-8 top-0 h-full w-12 pointer-events-none z-40"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 80 4000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Background track (dim) */}
        <path
          d={linePath}
          stroke="rgba(212,175,55,0.08)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Animated gold line */}
        <path
          d={linePath}
          className="fairway-line gold-bloom"
          strokeDasharray={totalLength}
          strokeDashoffset={dashOffset}
          style={{
            transition: "stroke-dashoffset 0.1s linear",
          }}
        />

        {/* Tee-off dot at top */}
        <circle
          cx="30"
          cy="8"
          r="4"
          fill="#d4af37"
          className="gold-bloom"
          opacity={progress > 0.01 ? 1 : 0.3}
        />

        {/* The Green — expanding circle at bottom */}
        <circle
          cx="30"
          cy="3992"
          r={progress > 0.95 ? 12 + (progress - 0.95) * 80 : 4}
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
          opacity={progress > 0.95 ? (progress - 0.95) * 10 : 0}
        />
      </svg>
    </div>
  );
}
