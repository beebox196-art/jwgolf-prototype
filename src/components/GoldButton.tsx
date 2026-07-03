"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "glass";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
}

/**
 * GoldButton — CTA button with pulse glow.
 *
 * Primary: gold gradient fill with pulse glow
 * Secondary: transparent with gold border
 * Glass: frosted glass style
 * Hover: scale + glow animation
 */
export default function GoldButton({
  children,
  variant = "primary",
  size = "md",
  pulse = false,
  className = "",
  ...props
}: GoldButtonProps) {
  const variantClasses = {
    primary: "gold-btn gold-btn--primary",
    secondary: "gold-btn gold-btn--secondary",
    glass: "gold-btn gold-btn--glass",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
  };

  const pulseClass = pulse ? "gold-glow-pulse" : "";

  return (
    <button
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${pulseClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
