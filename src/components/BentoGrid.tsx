"use client";

import { ReactNode, useEffect, useRef } from "react";

interface BentoGridProps {
  children: ReactNode;
  columns?: 8 | 10 | 12;
  gap?: "sm" | "md" | "lg";
  staggerDelay?: number;
  className?: string;
}

/**
 * BentoGrid — Responsive CSS grid wrapper for bento-style layouts.
 *
 * Default 12-column grid. Tiles inside can span 1-12 columns and 1-2 rows.
 * Mobile collapses to single column.
 * Stagger animation on mount with configurable delay.
 */
export default function BentoGrid({
  children,
  columns = 12,
  gap = "md",
  staggerDelay = 100,
  className = "",
}: BentoGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const childArray = Array.isArray(children) ? children : [children];

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const tiles = grid.querySelectorAll(".bento-tile");
    tiles.forEach((tile, index) => {
      const delay = index * staggerDelay;
      (tile as HTMLElement).style.animationDelay = `${delay}ms`;
    });
  }, [staggerDelay, children]);

  const gapClasses = {
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
  };

  const colClasses = {
    8: "grid-cols-8",
    10: "grid-cols-10",
    12: "grid-cols-12",
  };

  return (
    <div
      ref={gridRef}
      className={`grid ${colClasses[columns]} ${gapClasses[gap]} auto-rows-min ${className}`.trim()}
    >
      {childArray.map((child, index) => (
        <div key={index} className="bento-tile">
          {child}
        </div>
      ))}
    </div>
  );
}
