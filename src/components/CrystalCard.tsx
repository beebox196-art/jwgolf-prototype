"use client";

import { ReactNode, HTMLAttributes } from "react";

interface CrystalCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "gold" | "green";
  hover?: "default" | "glow";
}

/**
 * CrystalCard — Frosted glass card with gold border and glow on hover.
 *
 * Crystal Glass = backdrop-blur-2xl + gradient backgrounds + gold borders
 * Hover states with gold glow shadow per the hybrid spec.
 */
export default function CrystalCard({
  children,
  variant = "default",
  hover = "default",
  className = "",
  ...props
}: CrystalCardProps) {
  const variantClasses = {
    default: "crystal-card",
    gold: "crystal-card crystal-card--gold",
    green: "crystal-card crystal-card--green",
  };

  const hoverClasses = {
    default: "",
    glow: "crystal-card--glow",
  };

  return (
    <div
      className={`${variantClasses[variant]} ${hoverClasses[hover]} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
