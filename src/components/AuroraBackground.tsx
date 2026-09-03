/**
 * AuroraBackground — Subtle monochrome gradient with gold accent.
 *
 * Slow-shifting near-black gradients. Clean, editorial, timeless.
 * Pure CSS — no heavy JS, no requestAnimationFrame loops.
 */
export default function AuroraBackground({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden aurora-bg ${className}`.trim()}>
      {/* Noise overlay for texture */}
      <div className="noise-texture">
        {/* Subtle gold radial glow for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 20% 30%, rgba(198, 169, 107, 0.06) 0%, transparent 70%),
              radial-gradient(ellipse 50% 50% at 80% 70%, rgba(10, 10, 10, 0.8) 0%, transparent 70%),
              radial-gradient(ellipse 40% 30% at 50% 50%, rgba(198, 169, 107, 0.03) 0%, transparent 60%)
            `,
          }}
        />
        {children}
      </div>
    </div>
  );
}