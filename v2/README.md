# Portfolio v2 - Modern Glassmorphism Design

Welcome to the next evolution of my portfolio! v2 features a completely redesigned UI with modern glassmorphism aesthetics, interactive timelines, and advanced functionality.

## ✨ What's New

### Design & UX
- **Glassmorphism UI** - Frosted glass effect with smooth transitions
- **Dark/Light Theme** - Persistent theme toggle with system preference detection
- **Advanced Animations** - Smooth entrance animations and hover effects
- **Responsive Design** - Mobile-first, works beautifully on all devices
- **Complete Color System** - CSS variables for accent colors, backgrounds, and effects

### Features (Completed)
- ✅ Modern homepage with hero section
- ✅ Interactive timeline resume with visual progression
- ✅ Responsive navigation with theme toggle
- ✅ Skill badges with gradient effects
- ✅ Professional practices sections
- ✅ Smooth scroll behavior and animations

### Features (In Progress)
- ⏳ Project case studies with galleries
- ⏳ Blog/articles section
- ⏳ Speaking engagements showcase
- ⏳ PDF export functionality
- ⏳ 3D portfolio showcase (Three.js)

## 🚀 Quick Start

### View Locally
```bash
cd v2
# Open index.html in your browser
open index.html
```

Or use a local server:
```bash
python -m http.server 8000
# Then visit http://localhost:8000/v2
```

## 📁 File Structure

```
v2/
├── index.html                  # Main homepage
├── resume-timeline.html        # Interactive resume with timeline
├── projects.html              # Projects & case studies (coming)
├── blog.html                  # Blog/articles (coming)
├── speaking.html              # Speaking engagements (coming)
├── assets/
│   ├── css/
│   │   ├── theme.css          # Main styles with glassmorphism
│   │   ├── timeline.css       # Timeline-specific styles (coming)
│   │   ├── 3d.css             # 3D effects (coming)
│   │   └── projects.css       # Project gallery styles (coming)
│   ├── js/
│   │   ├── theme-toggle.js    # Dark/light mode management
│   │   ├── timeline.js        # Timeline animations (coming)
│   │   └── utils.js           # Helper functions (coming)
│   └── images/
│       └── projects/          # Project case study images
└── data/
    ├── projects.json          # Project data (coming)
    ├── timeline.json          # Experience timeline (coming)
    └── articles.json          # Blog articles (coming)
```

## 🎨 Design System

### Colors
- **Primary Accent**: #6366f1 (Indigo)
- **Secondary Accent**: #8b5cf6 (Violet)
- **Tertiary Accent**: #ec4899 (Pink)
- Success: #10b981
- Warning: #f59e0b
- Danger: #ef4444

### Glassmorphism
- **Backdrop Filter**: `blur(20px)` for main glass effect
- **Border Radius**: 20px for main cards, 16px for subtle elements
- **Border Color**: `rgba(255, 255, 255, 0.1)` in light mode
- **Shadow**: Multi-layered with opacity for depth

### Typography
- **Primary Font**: SF Pro Display / Segoe UI
- **Heading Weights**: 600 or 700
- **Body Size**: 14-16px
- **Line Height**: 1.6

## 🌓 Theme Management

The theme system is fully automatic:
1. **Load**: Checks localStorage first, then system preference
2. **Toggle**: Click theme button to switch
3. **Persist**: Saves to localStorage
4. **Reactivity**: CSS variables update instantly

### Adding Dark Mode to New Section
```css
/* Use CSS variables - they handle light/dark automatically */
color: var(--text-primary);
background: var(--glass);
border: 1px solid var(--border);
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (full layout)

## 🔧 Customization

### Change Accent Colors
Edit `theme.css`:
```css
--accent-primary: #6366f1;
--accent-secondary: #8b5cf6;
--accent-tertiary: #ec4899;
```

### Adjust Glass Effect
```css
--blur-sm: blur(10px);
--blur-md: blur(20px);
--blur-lg: blur(40px);
```

### Animation Speeds
```css
--transition-fast: 150ms;
--transition-base: 300ms;
--transition-slow: 500ms;
```

## 📊 Performance

- **Pure HTML/CSS/JS** - No framework overhead
- **Optimized Animations** - Uses GPU acceleration
- **Minimal Dependencies** - No external libraries (yet)
- **Lazy Loading Ready** - Images optimized for progressive loading

## 🚢 Deployment

Works great with:
- GitHub Pages
- Netlify
- Vercel
- Any static host

Just push to git and deploy!

## 📝 Upcoming Sections

### Projects Page
- Interactive case study cards
- Image galleries with lightbox effects
- Filter by technology/category
- Link to GitHub repos

### Blog
- Article cards with metadata
- Search functionality
- Category/tag filtering
- Reading time estimates

### Speaking
- Conference talks showcase
- Video embeds
- Slide links
- Calendar integration

### PDF Export
- Download resume with styling
- Interactive form to customize sections
- Automatic PDF generation

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Glassmorphism, animations, grid/flexbox
- **JavaScript (Vanilla)** - No dependencies, pure ES6+
- **Fonts**: Google Fonts (Poppins + System fonts)

## 🌐 Browsers

Tested and works on:
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

## 📧 Questions?

Feel free to reach out via:
- Email: manojgadamsetty@zohomail.in
- LinkedIn: linkedin.com/in/manojgadamsetty
- GitHub: github.com/manojgadamsetty

---

**Version**: 2.0.0  
**Last Updated**: Apr 19, 2026  
**Status**: Active Development (Phase 2 complete)
