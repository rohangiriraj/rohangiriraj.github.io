# Rohan Giriraj - Personal Portfolio Website

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript, featuring a Gundam-inspired angular design with tangerine orange accents.

## 🎯 Features

- **Responsive Design**: Optimized for all screen sizes from mobile to ultra-wide displays
- **Theme Toggle**: Light/Dark mode with smooth animations
- **Angular Design**: Gundam-esque aesthetic with clipped corners and geometric elements
- **Interactive Animations**: Hover effects with orange glow and smooth transitions
- **Blog System**: Markdown-based blog posts with syntax highlighting
- **Project Showcase**: Dynamic project gallery with filtering
- **Modern Tech Stack**: Vanilla web technologies with no framework dependencies

## 📁 Project Structure

```
rohangiriraj.github.io/
├── assets/
│   ├── css/
│   │   └── style.css           # Main stylesheet with Gundam-inspired design
│   ├── images/
│   │   └── *.jpg               # Profile pictures and media assets
│   └── icons/
│       ├── favicon.ico         # Website favicon
│       └── favicon.svg         # SVG favicon
├── content/
│   ├── posts/
│   │   └── *.md               # Blog post markdown files
│   └── projects/
│       └── *.md               # Project detail markdown files
├── tools/
│   ├── create_favicon.sh       # Favicon generation script
│   └── favicon-generator.html  # Favicon generator tool
├── index.html                  # Homepage
├── blog.html                   # Blog listing page
├── post.html                   # Individual blog post page
├── projects.html               # Projects listing page
├── project.html                # Individual project page
├── cv.html                     # CV/Resume page
├── posts.json                  # Blog posts metadata
├── projects.json               # Projects metadata
└── README.md                   # This file
```

## 🎨 Design System

### Color Scheme
- **Primary**: Orange (#ff8c42) - Tangerine accent color
- **Light Theme**: Pure white background (#ffffff) with black text (#000000)
- **Dark Theme**: Pure black background (#000000) with white text (#ffffff)
- **Greys**: Various shades for subtle elements and borders

### Typography
- **Font**: Share Tech (Google Fonts) - Monospace font for tech aesthetic
- **Responsive scaling**: Text sizes scale with screen size for optimal readability

### Interactive Elements
- **Hover Effects**: Orange glow effects on all interactive elements
- **Animations**: Smooth transitions and fill effects inspired by modern design
- **Angular Design**: Clipped corners and geometric shapes throughout

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rohangiriraj/rohangiriraj.github.io.git
   cd rohangiriraj.github.io
   ```

2. **Serve locally** (any static server):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000`

## 📝 Content Management

### Adding Blog Posts
1. Create a new `.md` file in `content/posts/`
2. Add metadata to `posts.json`
3. Blog posts support markdown with syntax highlighting

### Adding Projects
1. Create a new `.md` file in `content/projects/`
2. Add project data to `projects.json`
3. Include project links, tech stack, and status

## 🛠️ Development Tools

- **Favicon Generator**: `tools/favicon-generator.html` - Interactive favicon creator
- **Build Script**: `tools/create_favicon.sh` - Automated favicon generation

## 🌐 Deployment

This site is designed for static hosting on GitHub Pages, Netlify, Vercel, or any static hosting service.

### GitHub Pages Setup
1. Push to `main` branch
2. Enable GitHub Pages in repository settings
3. Site will be available at `https://username.github.io`

## 🎯 Performance

- **Vanilla JavaScript**: No framework overhead
- **Optimized Assets**: Compressed images and efficient CSS
- **Modern Web Standards**: Uses CSS Grid, Flexbox, and modern JavaScript
- **Progressive Enhancement**: Works without JavaScript for basic functionality

## 🔧 Customization

### Changing Colors
- Edit CSS custom properties in `assets/css/style.css`
- Main accent color: `--accent-color: #ff8c42`

### Modifying Layout
- Responsive breakpoints defined for different screen sizes
- Angular design elements can be toggled via clip-path properties

### Adding Features
- Extend JSON data files for new content types
- JavaScript modules are organized and easy to extend

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: CSS Grid, Custom Properties, ES6+ JavaScript

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Website**: [rohangiriraj.github.io](https://rohangiriraj.github.io)
- **GitHub**: [@rohangiriraj](https://github.com/rohangiriraj)
- **Email**: [Contact through website](https://rohangiriraj.github.io)

---

Built with ❤️ and modern web technologies