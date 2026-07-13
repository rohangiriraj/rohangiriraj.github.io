# Personal Portfolio Website

A modern, responsive portfolio built with vanilla HTML/CSS/JS featuring the Serika theme and dark mode toggle.

## Overview

This portfolio website (rohangiriraj.dev) was built from scratch using vanilla HTML, CSS, and JavaScript—no frameworks or heavy dependencies. The goal was to create a fast-loading, developer-focused portfolio that showcases projects and blog posts while maintaining a clean, professional aesthetic.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla, no frameworks)
- **Styling**: CSS custom properties, responsive grid/flexbox
- **Theme**: Serika color scheme with dark/light mode
- **Data Management**: JSON for dynamic content loading
- **Deployment**: GitHub Pages

## Key Features

### Responsive Design
Built mobile-first with a responsive layout using CSS Grid and Flexbox, ensuring the site looks great on devices from small phones to large desktop monitors.

### Dark/Light Theme Toggle
Implemented theme switching using JavaScript with localStorage persistence, allowing users to maintain their preferred color scheme across sessions. The theme includes carefully selected colors from the Serika palette for a cohesive visual identity.

### Dynamic Content Loading
Projects and blog posts are loaded dynamically from JSON files and markdown content, eliminating the need for manual HTML updates when adding new projects or posts. The site automatically handles pagination and filtering.

### Performance Optimized
- Zero framework overhead—pure vanilla JavaScript for instant loading
- Minimal CSS without preprocessing tools
- Optimized image assets
- Efficient JSON-based data structure

## Development Process

The site was built incrementally, starting with a clean HTML structure and progressively adding styling and interactivity. Key phases included:

1. **HTML Structure**: Semantic HTML5 markup with proper hierarchy
2. **CSS Styling**: Custom properties for theming, responsive layouts
3. **JavaScript Functionality**: Theme toggle, content loading, transitions
4. **Content Integration**: JSON-based project and blog system

## Architecture

### File Structure
```
.
├── index.html              # Homepage
├── projects.html          # Projects page
├── blog.html             # Blog listing
├── projects.json         # Project metadata
├── posts.json            # Blog post metadata
├── content/
│   ├── projects/         # Project markdown files
│   └── posts/            # Blog post markdown files
└── assets/
    ├── css/              # Stylesheets
    └── js/               # JavaScript files
```

### Content Pipeline
1. Markdown files stored in `content/` directory
2. JSON metadata files define structure and presentation
3. JavaScript loads and renders content dynamically
4. CSS ensures consistent styling across pages

## Challenges & Solutions

### Theme Consistency
Maintaining visual consistency across multiple pages and color schemes required systematic use of CSS custom properties. All colors are defined at the root level and applied consistently throughout.

### Performance Without Build Tools
By avoiding build tools and frameworks, the site loads extremely fast but requires careful management of code organization. Comments and clear structure compensate for lack of minification during development.

### Dynamic Content Without Backend
Using static JSON files as a "database" allows for dynamic content loading without requiring a backend server, keeping the site fully compatible with GitHub Pages.

## Future Enhancements

- Search functionality for projects and blog posts
- Tags and categories for better content organization
- Comment system for blog posts
- Analytics integration
- Syntax highlighting improvements for code samples

## Links

- **Live Site**: [https://rohangiriraj.dev](https://rohangiriraj.dev)
- **Source Code**: [GitHub Repository](https://github.com/rohan/portfolio)

*Project completed in July 2025*
