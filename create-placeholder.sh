#!/bin/bash
# Create placeholder hero-background.jpg for the hero section

# Create a simple gradient background using sips
sips -s format png -s width 1920 -s height 1080 \
  --createEmpty \
  /Users/openclaw/Projects/JWGolf-Prototype/public/hero-bg.png

# Use ImageMagick or convert if available, otherwise create basic placeholder
if command -v convert &> /dev/null; then
  convert -size 1920x1080 gradient:'#1b4332-#000000' \
    -gravity Center -fill white -pointsize 72 -annotate 0 'Golf Coaching' \
    /Users/openclaw/Projects/JWGolf-Prototype/public/hero-bg.jpg
else
  echo "Creating simple placeholder"
  # Create a minimal SVG placeholder
  cat > /Users/openclaw/Projects/JWGolf-Prototype/public/hero-bg.svg << 'EOF'
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1b4332;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#grad1)"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="72" font-family="Arial">
    Golf Coaching
  </text>
  <circle cx="50%" cy="50%" r="200" fill="#d4af37" opacity="0.1"/>
</svg>
EOF
fi

echo "Placeholder created"
