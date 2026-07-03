"use client";

import { ReactNode, useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number; // 0-1, intersection ratio
  className?: string;
}

/**
 * ScrollReveal — Scroll-triggered reveal wrapper.
 *
 * Uses IntersectionObserver to trigger fade + translate animation.
 * Configurable direction, delay, duration, and easing.
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay before revealing
          setTimeout(() => {
            el.classList.add("is-visible");
            el.style.transitionDuration = `${duration}ms`;
          }, delay);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, duration, threshold]);

  const directionClass = `scroll-reveal scroll-reveal--${direction}`;

  return (
    <div ref={ref} className={`${directionClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
