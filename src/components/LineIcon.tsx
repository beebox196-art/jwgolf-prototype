import { SVGProps } from "react";

/**
 * LineIcon — consistent 1.5px stroke line icons for the social proof bar.
 * Replaces emoji glyphs (🏟️📰🏆) with a considered, premium icon set.
 * All icons share the same stroke weight + round caps for visual consistency.
 */
type IconName = "venue" | "press" | "trophy";

interface LineIconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const paths: Record<IconName, React.ReactNode> = {
  // Venue / location pin
  venue: (
    <>
      <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  // Press / newspaper
  press: (
    <>
      <path d="M4 5h13a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z" />
      <path d="M4 9h15" />
      <path d="M8 13h4" />
      <path d="M8 16h4" />
    </>
  ),
  // Trophy
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5a3 3 0 0 0 3 3" />
      <path d="M16 5h3a3 3 0 0 1-3 3" />
      <path d="M12 13v4" />
      <path d="M9 20h6" />
      <path d="M10 17h4" />
    </>
  ),
};

export default function LineIcon({ name, size = 20, ...props }: LineIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
