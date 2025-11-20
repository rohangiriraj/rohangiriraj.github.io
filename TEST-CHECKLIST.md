# Testing Checklist - Website v3 Migration

## 🎯 Quick Start
Server is running on: **http://localhost:8000**

---

## ✅ Test Each Page

### 1. Homepage (index.html)
**URL**: http://localhost:8000/index.html

- [ ] Page loads without errors
- [ ] Navigation dock visible at bottom
- [ ] All 4 tabs work (Home/Work/Thoughts/CV)
- [ ] **Home tab**: Shows intro text
- [ ] **Work tab**: Shows 3 featured projects dynamically
- [ ] **Thoughts tab**: Shows 4 recent blog posts dynamically
- [ ] **CV tab**: Shows "Go to full CV" button
- [ ] "View All Projects" button links to projects.html
- [ ] "Read More Posts" button links to blog.html
- [ ] Project cards link to project.html with correct slug
- [ ] Blog post cards link to post.html with correct file

**Console Check**: No JavaScript errors

---

### 2. Blog Page (blog.html)
**URL**: http://localhost:8000/blog.html

- [ ] Page loads with all blog posts
- [ ] Shows 5 posts per page maximum
- [ ] Pagination controls appear (if >5 posts)
- [ ] Page numbers work correctly
- [ ] URL updates with ?page=1, ?page=2, etc.
- [ ] Previous/Next buttons work
- [ ] Dates format correctly (e.g., "AUG 2025")
- [ ] Post excerpts display
- [ ] Clicking post card opens post.html
- [ ] Navigation active state shows "Thoughts"

**Test Cases**:
- Go to page 2, verify URL is `?page=2`
- Click a post, then click back - should return to page 2

---

### 3. Projects Page (projects.html)
**URL**: http://localhost:8000/projects.html

- [ ] Page loads with all projects
- [ ] Shows 6 projects per page maximum
- [ ] Four filter buttons visible: All, Featured, Complete, In Progress
- [ ] "All" filter shows all projects
- [ ] "Featured" filter shows only featured projects
- [ ] "Complete" filter shows only completed projects
- [ ] "In Progress" filter shows only in-progress projects
- [ ] Pagination updates based on filtered results
- [ ] Project cards show title, status, and tech stack
- [ ] Clicking project card opens project.html
- [ ] Navigation active state shows "Work"

**Test Cases**:
- Filter by "Featured", verify count changes
- Apply filter, go to page 2, change filter - should reset to page 1

---

### 4. CV Page (cv.html)
**URL**: http://localhost:8000/cv.html

- [ ] Page loads correctly
- [ ] Experience section displays
- [ ] Each job entry shows: timeframe, title, company, description
- [ ] Tech Stack section displays
- [ ] Languages, Infrastructure, and Data sections visible
- [ ] Education section displays
- [ ] Contact button visible at bottom
- [ ] Navigation active state shows "CV"

---

### 5. Post Detail Page (post.html)
**Critical Page - Tests Markdown/Syntax/LaTeX**

#### Test 1: Hello World Post
**URL**: http://localhost:8000/post.html?post=hello-world.md&from=1

- [ ] Page loads without errors
- [ ] Post title displays
- [ ] Post date displays (formatted as "Month Day, Year")
- [ ] Markdown content renders as HTML
- [ ] Back link shows "← Back to Thoughts"
- [ ] Back link goes to blog.html?page=1

#### Test 2: Syntax Highlighting
**URL**: http://localhost:8000/post.html?post=syntax-highlighting-demo.md&from=1

- [ ] Page loads
- [ ] Code blocks display with syntax highlighting
- [ ] Python code highlighted correctly
- [ ] JavaScript code highlighted correctly
- [ ] Multiple language examples visible
- [ ] Code has dark background with colored syntax
- [ ] Line breaks preserved in code blocks

**Console Check**: No Prism.js errors

#### Test 3: LaTeX/Math Equations
**URL**: http://localhost:8000/post.html?post=matrix-test.md&from=1

- [ ] Page loads
- [ ] LaTeX equations render (not raw LaTeX code)
- [ ] Matrix displays correctly
- [ ] Inline math equations work (if any)
- [ ] Block equations centered and formatted

**Console Check**: No MathJax errors

#### Test 4: Combined Features
**URL**: http://localhost:8000/post.html?post=latex-support-demo.md&from=1

- [ ] Both LaTeX and regular content render
- [ ] Mixed content displays correctly
- [ ] Page layout not broken by math equations

---

### 6. Project Detail Page (project.html)
**URL Examples**:
- http://localhost:8000/project.html?project=blockchain-voting-system
- http://localhost:8000/project.html?project=ml-recommendation-engine

- [ ] Page loads without errors
- [ ] Project title displays
- [ ] Status badge shows (Complete/In Progress)
- [ ] Tech stack displays as comma-separated list
- [ ] Markdown content renders to HTML
- [ ] Lists, headings, paragraphs format correctly
- [ ] Back link shows "← Back to Work"
- [ ] Back link goes to projects.html

**Test Multiple Projects**:
- [ ] blockchain-voting-system
- [ ] data-pipeline-automation
- [ ] microservices-api-gateway

---

## 🔍 Cross-Page Navigation

### Flow 1: Homepage → Blog → Post → Back
1. Start at index.html
2. Click "Read More Posts" → Should go to blog.html
3. Click any post → Should go to post.html?post=...&from=1
4. Click "Back to Thoughts" → Should return to blog.html?page=1

### Flow 2: Homepage → Projects → Project → Back
1. Start at index.html, go to Work tab
2. Click "View All Projects" → Should go to projects.html
3. Click any project → Should go to project.html?project=...
4. Click "Back to Work" → Should return to projects.html

### Flow 3: Blog Pagination Memory
1. Go to blog.html?page=2
2. Click any post → URL should have &from=2
3. Click back → Should return to blog.html?page=2 (not page 1)

---

## 🎨 Visual/Design Checks

### All Pages Should Have:
- [ ] Dark background (#050507)
- [ ] Bottom navigation dock (glassmorphic)
- [ ] Accent color is terminal green (#32d74b)
- [ ] SF Pro font family
- [ ] Smooth transitions/animations
- [ ] Cards have subtle glassmorphic effect
- [ ] Hover states on interactive elements

### Responsive (if testing mobile):
- [ ] Navigation readable on mobile
- [ ] Cards stack properly
- [ ] Text readable (not too small)
- [ ] Buttons/links touchable

---

## 🐛 Browser Console

Open Developer Tools (F12) and check for:
- **No errors** in Console tab
- **No 404s** in Network tab for:
  - posts.json
  - projects.json
  - markdown files in content/
  - marked.js CDN
  - Prism.js CDN (on post.html)
  - MathJax CDN (on post.html)

---

## 📊 Data Validation

### Verify JSON Loading
**posts.json**: http://localhost:8000/posts.json
- [ ] Valid JSON
- [ ] All posts have: file, title, date, excerpt

**projects.json**: http://localhost:8000/projects.json
- [ ] Valid JSON
- [ ] All projects have: slug, file, title, status, featured, techStack

### Verify Markdown Files
Check these files exist and load:
- [ ] content/posts/hello-world.md
- [ ] content/posts/syntax-highlighting-demo.md
- [ ] content/posts/matrix-test.md
- [ ] content/posts/latex-support-demo.md
- [ ] content/projects/blockchain-voting-system.md
- [ ] content/projects/ml-recommendation-engine.md

---

## ✨ Feature-Specific Tests

### Dynamic Loading
- [ ] Projects load from JSON (check Network tab)
- [ ] Blog posts load from JSON
- [ ] Content appears after page load (async)

### Pagination
- [ ] URL params work (?page=2)
- [ ] Page numbers clickable
- [ ] Previous/Next disabled correctly (first/last page)
- [ ] Page state preserved across navigation

### Filtering
- [ ] Filter buttons toggle active state
- [ ] Projects list updates on filter change
- [ ] Pagination resets to page 1 on filter change
- [ ] Correct projects shown for each filter

### Markdown Rendering
- [ ] Headings render correctly (h1, h2, h3)
- [ ] Paragraphs have proper spacing
- [ ] Lists (ul, ol) render correctly
- [ ] Links are clickable and colored
- [ ] Emphasis (bold, italic) works

### Syntax Highlighting
- [ ] Code blocks have colored syntax
- [ ] Different languages have appropriate colors
- [ ] Background distinct from regular text
- [ ] Inline code has subtle background

### LaTeX Support
- [ ] Equations render (not raw code)
- [ ] Special characters display correctly
- [ ] Matrices format properly
- [ ] No layout breaks from math

---

## 🚦 Final Checklist

Before considering migration complete:

- [ ] All 6 pages load without errors
- [ ] All navigation links work
- [ ] All dynamic content loads from JSON
- [ ] Markdown renders on post.html and project.html
- [ ] Syntax highlighting works (Prism.js)
- [ ] LaTeX renders (MathJax)
- [ ] Pagination works on blog and projects
- [ ] Filtering works on projects
- [ ] Back navigation preserves context
- [ ] No console errors on any page
- [ ] Design consistent across all pages

---

## 📝 Issues Found

Document any issues here:

1. 
2. 
3. 

---

**Testing Status**: 🔄 In Progress

Once all checkboxes are ✅, migration is complete and ready for deployment!
