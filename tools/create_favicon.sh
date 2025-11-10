#!/bin/bash

# Create a simple 16x16 favicon.ico using ImageMagick if available
if command -v convert &> /dev/null; then
    # Create a temporary PNG first
    cat > temp_favicon.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  <rect width="16" height="16" fill="#1a1a1a"/>
  <rect x="2" y="4" width="1" height="8" fill="#00ff88"/>
  <rect x="2" y="4" width="3" height="1" fill="#00ff88"/>
  <rect x="2" y="7" width="3" height="1" fill="#00ff88"/>
  <rect x="5" y="4" width="1" height="3" fill="#00ff88"/>
  <rect x="4" y="8" width="1" height="4" fill="#00ff88"/>
  <rect x="9" y="4" width="4" height="1" fill="#00ff88"/>
  <rect x="9" y="4" width="1" height="8" fill="#00ff88"/>
  <rect x="9" y="11" width="4" height="1" fill="#00ff88"/>
  <rect x="12" y="7" width="1" height="5" fill="#00ff88"/>
  <rect x="11" y="7" width="2" height="1" fill="#00ff88"/>
</svg>
EOF
    
    # Convert SVG to ICO if ImageMagick is available
    convert temp_favicon.svg -resize 16x16 favicon.ico
    rm temp_favicon.svg
    echo "Created favicon.ico using ImageMagick"
else
    echo "ImageMagick not available, keeping SVG favicon only"
fi
