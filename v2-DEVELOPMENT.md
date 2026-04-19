## Portfolio v2 - Development Roadmap

### ✅ Phase 1 Complete: Foundation & Homepage
Built in **commit 368808c**

**What was created:**
- **theme.css** - Complete glassmorphism design system
  - Light/dark mode with CSS variables
  - Glass effect components with backdrop filters
  - Animation keyframes and utilities
  - Smooth transitions and hover effects
  - Color system with accent gradients

- **index.html** - Modern homepage
  - Hero section with gradient text
  - Spotlight cards showcase
  - Core expertise feature grid
  - Call-to-action sections
  - Sticky navigation header
  - Responsive layout

- **resume-timeline.html** - Interactive resume
  - Vertical timeline with animated circles
  - Work experience with bullet points
  - Education grid
  - Certifications & learning
  - Skill badges with filters
  - PDF export placeholder

- **theme-toggle.js** - Theme management
  - Automatic dark/light detection
  - localStorage persistence
  - System preference detection
  - Smooth transition animations
  - Icon updates


### 🚀 Phase 3: Projects Page (Ready to Build)

Create: **v2/projects.html**
Create: **v2/assets/css/projects.css**

**Features to implement:**
- Hero section with filter buttons
- Project case study cards
- Image gallery with lightbox
- Project metadata (tech stack, links)
- Hover effects and transitions
- Pagination or infinite scroll

**HTML structure:**
```html
<section class="projects-grid">
  <div class="project-card glass">
    <div class="project-image-container">
      <img src="..." alt="...">
      <div class="project-overlay">
        <a href="#" class="btn-details">View Case Study</a>
      </div>
    </div>
    <div class="project-info">
      <h3>Project Name</h3>
      <p>Brief description</p>
      <div class="tech-stack">
        <span class="badge">iOS</span>
        <span class="badge">Swift</span>
      </div>
    </div>
  </div>
</section>
```

**CSS to add:**
```css
.project-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.project-image-container {
  position: relative;
  width: 100%;
  padding-bottom: 66.66%; /* 3:2 aspect ratio */
  overflow: hidden;
}

.project-image-container img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.project-card:hover .project-image-container img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.project-card:hover .project-overlay {
  opacity: 1;
}
```

---

### 🏷️ Phase 4: Blog Section

Create: **v2/blog.html**
Create: **v2/assets/css/blog.css**

**Features:**
- Article card grid
- Search functionality
- Category/tag filtering
- Date and reading time
- Featured articles
- Archive by date

**Data structure (blog.json):**
```json
{
  "articles": [
    {
      "id": 1,
      "title": "Article Title",
      "excerpt": "...",
      "date": "2026-04-19",
      "category": "Security",
      "tags": ["mobile", "security"],
      "readingTime": 8,
      "image": "..."
    }
  ]
}
```

---

### 🎤 Phase 5: Speaking & PDF Export

Create: **v2/speaking.html**
Create: **v2/assets/js/pdf-export.js**

**Speaking features:**
- Conference talk cards
- Event details and dates
- Slide links
- Video embeds
- Location information

**PDF Export implementation:**
- Use html2pdf.js or similar
- Customize section visibility
- Maintain styling in PDF
- Download as "Resume_ManojGadamsetty.pdf"

---

## 🎯 Next Immediate Steps

### 1. Create Data Files
```bash
touch v2/data/{projects,timeline,articles}.json
```

### 2. Projects Page Build
```bash
touch v2/projects.html
touch v2/assets/css/projects.css
```

Templates ready - just need to:
- Add project data to projects.json
- Create project card components
- Add gallery functionality
- Implement filter buttons

### 3. Testing Checklist
- [ ] Test dark/light toggle on all pages
- [ ] Test animations on mobile
- [ ] Verify glassmorphism on different browsers
- [ ] Check responsive breakpoints
- [ ] Test navigation links

---

## 🎨 Design Inspiration

**Current:** Clean, modern glassmorphism with smooth animations
**Enhance with:**
- Subtle gradient backgrounds in sections
- Hover state enhancements
- Loading animations
- Micro-interactions
- Scroll-triggered animations
- Parallax effects

---

## ⚡ Performance Optimization Ideas

1. **Lazy Load Images**
   ```html
   <img loading="lazy" src="..." alt="...">
   ```

2. **Image Optimization**
   - Use WebP format with fallbacks
   - Responsive images with srcset
   - SVG for icons

3. **Code Splitting**
   - Load JS only where needed
   - Separate CSS for each page

4. **Caching**
   - Service Worker for offline support
   - Cache images and assets

---

## 📊 Feature Comparison: v1 vs v2

| Feature | v1 | v2 |
|---------|----|----|
| Theme Toggle | ✅ | ✅ |
| Mobile UI | iPhone mockup | Responsive web |
| Resume | Static HTML | Interactive timeline |
| Projects | None | Case studies (coming) |
| Blog | None | Articles (coming) |
| Animations | Basic | Advanced (GSAP-ready) |
| Glassmorphism | No | Yes |
| Dark Mode | Yes | Yes (polished) |
| PDF Export | No | Coming |

---

## 💡 Pro Tips for Building Out v2

1. **Reuse the theme.css** - All components automatically get light/dark support
2. **Use CSS classes** - Add `glass`, `glass-subtle`, `btn`, etc.
3. **Stagger animations** - Use `animation-delay` for cascade effects
4. **Mobile first** - Start responsive, then enhance desktop
5. **Keep it simple** - No frameworks means fewer dependencies!

---

## 🔗 Integration with v1

**Keep both running:**
- v1 at `/v1/` for original iPhone showcase
- v2 at `/v2/` for new glassmorphism design
- Link between them for users to explore

Eventually: Decide which to keep as primary

---

**Ready to build Phase 3 (Projects)? Let me know!**
