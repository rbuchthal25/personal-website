# Portfolio Website

A clean, minimal personal portfolio with 5 pages: Home, About, Experience, Projects, and Blog.

---

## File Structure

```
portfolio/
├── index.html          ← Main file. All pages live here as <div class="page"> sections.
├── css/
│   ├── style.css       ← Global styles, CSS variables, reset, typography, buttons, footer
│   ├── nav.css         ← Navigation bar
│   ├── home.css        ← Home page
│   ├── about.css       ← About page
│   ├── experience.css  ← Experience timeline
│   ├── projects.css    ← Projects grid
│   └── blog.css        ← Blog page
├── js/
│   └── main.js         ← Page routing (showPage function)
└── assets/             ← Put your images/resume here
    ├── photo.jpg           (your profile photo)
    ├── resume.pdf          (your resume)
    └── blog/
        ├── post1.jpg
        └── ...
```

---

## How to Run

Just open `index.html` in any browser. No build step required.

For a local dev server (recommended, so images load correctly):
```bash
npx serve .
# or
python3 -m http.server 8000
```

---

## Quick Customization Checklist

### 1. Your name
Find and replace all instances of `Your Name` in `index.html` and `<title>` tag.

### 2. Colors
Open `css/style.css` and edit the `:root` variables:
```css
:root {
  --accent: #2d5a3d;       /* change this to your brand color */
  --bg: #f0ede8;           /* page background */
  --text: #1a1916;         /* main text color */
}
```

### 3. Fonts
In `index.html`, replace the Google Fonts URL and update `--serif` / `--sans` in `style.css`.

### 4. Profile photo
In the About section, replace:
```html
<div class="avatar-placeholder">...</div>
```
with:
```html
<img src="assets/photo.jpg" alt="Your Name" style="width:180px; height:220px; object-fit:cover; border-radius:12px; border:1px solid var(--border);">
```

### 5. Adding a blog photo
Replace the placeholder `.blog-card-img` div with:
```html
<div class="blog-card-img" style="padding:0; opacity:1;">
  <img src="assets/blog/photo.jpg" alt="Post title" style="width:100%; height:100%; object-fit:cover;">
</div>
```

### 6. Resume download
In the Experience page, update:
```html
<a href="assets/resume.pdf" target="_blank" class="btn btn-primary">
```

### 7. Social links
Search for `yourusername` and `you@email.com` in `index.html` and replace with your real links.

### 8. Status indicator
On the Home page, the green dot says "Open to new opportunities".
Change the text or remove the `.eyebrow` block entirely if not applicable.

---

## Adding a New Blog Post

Copy this block inside `.blog-grid` in `index.html`:
```html
<div class="blog-card">
  <div class="blog-card-img" style="padding:0; opacity:1;">
    <img src="assets/blog/YOUR-PHOTO.jpg" alt="Post title" style="width:100%; height:100%; object-fit:cover;">
  </div>
  <div class="blog-card-body">
    <span class="tag">Category</span>
    <p class="blog-meta" style="margin:8px 0;">Month Year</p>
    <h3>Post Title</h3>
    <p>One-line description.</p>
  </div>
</div>
```

---

## Adding a New Project

Copy this block inside `.projects-grid` in `index.html`:
```html
<div class="project-card">
  <div class="project-img">
    <img src="assets/project-screenshot.png" alt="Project name" style="width:100%; height:100%; object-fit:cover;">
  </div>
  <div class="project-body">
    <div class="project-name">Project Name</div>
    <p class="project-desc">What it does and why it's cool.</p>
    <div class="exp-tags" style="margin-bottom:14px;">
      <span class="tag">Tech</span>
    </div>
    <div class="project-links">
      <a href="https://your-demo.com" class="project-link">↗ Demo</a>
      <a href="https://github.com/you/repo" class="project-link">⌥ GitHub</a>
    </div>
  </div>
</div>
```

---

## Deploying for Free

**GitHub Pages** (recommended):
1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: main branch / root
3. Your site will be live at `https://yourusername.github.io/repo-name`

**Netlify**:
1. Drag and drop the `portfolio/` folder onto netlify.com/drop
2. Done — you get a live URL instantly

---
