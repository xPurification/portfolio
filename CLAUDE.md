# CLAUDE.md - Portfolio

## Project Overview

A single-page personal portfolio website for Devon Purification, built with React + Vite. The design features high-contrast neon colors on black, HUD-style UI elements, and geometric angular design language.

**Purpose**: Job-seeking portfolio to showcase work experience, projects, and skills.

**Repository**: https://github.com/xPurification/portfolio

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18+ | UI framework |
| Vite | Build tool and dev server |
| CSS (vanilla) | Styling (no CSS framework) |
| Google Fonts | Typography (Orbitron, Share Tech Mono) |
| Vercel | Hosting (free tier) |

---

## Common Commands

```bash
# Development
npm run dev          # Start dev server at localhost:5173

# Build
npm run build        # Build for production (outputs to /dist)
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint
```

---

## Project Architecture

```
portfolio/
├── CLAUDE.md              # This file - project reference
├── PRD.md                 # Product Requirements Document
├── progress.txt           # Session progress tracking
├── index.html             # Entry HTML
├── package.json
├── vite.config.js
├── public/
│   └── resume.pdf         # Downloadable resume
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Main app component
    ├── App.css            # App-level styles
    ├── index.css          # Global styles import
    ├── components/
    │   └── Sidebar/
    │       ├── Sidebar.jsx
    │       └── Sidebar.css
    ├── sections/
    │   ├── About.jsx      # About section
    │   ├── Projects.jsx   # Projects section
    │   └── Resume.jsx     # Resume section
    ├── data/
    │   └── content.js     # All portfolio content (experience, projects, etc.)
    └── styles/
        ├── variables.css  # CSS custom properties (colors, fonts, spacing)
        └── global.css     # Base styles, resets, utilities
```

---

## Design System

### Color Palette

```css
/* Primary */
--color-lime: #c2fe0c;        /* Lime green - PRIMARY ACCENT */
--color-white: #ffffff;       /* Primary text */

/* Accents */
--color-cyan: #01ffff;        /* Secondary accent */
--color-red: #ff0d1a;         /* Highlight/alert */
--color-purple: #5200ff;      /* Tertiary accent */

/* Backgrounds */
--color-black: #000000;       /* Primary background */
--color-navy: #29324f;        /* Card backgrounds */

/* Neutral */
--color-gray: #8e8e8e;        /* Muted text */
```

### Typography

- **Display/Headers**: `'Orbitron', sans-serif` - Geometric, futuristic
- **Body/Code**: `'Share Tech Mono', monospace` - Technical monospace

### Key Visual Elements

1. **Fixed left sidebar** - Always visible navigation
2. **Scanline overlay** - Subtle CRT effect
3. **Corner brackets** - HUD-style decorations
4. **Neon glows** - On hover/focus states
5. **Angular clip-paths** - Cut corner geometric shapes

---

## Code Style

### React Components
- Functional components only (no class components)
- Use hooks for state and effects
- Co-locate CSS with components (ComponentName/ComponentName.jsx + ComponentName.css)

### CSS
- BEM-like naming: `.component__element--modifier`
- Use CSS custom properties from variables.css
- Mobile-first responsive design
- Prefer CSS over JS for animations

### File Naming
- Components: PascalCase (`Sidebar.jsx`)
- Styles: Match component name (`Sidebar.css`)
- Data/utilities: camelCase (`content.js`)

---

## Section Order

1. **About** - Bio, skills, tech badges
2. **Projects** - Project cards with tech stack (show work first)
3. **Resume** - Experience timeline, education, PDF download

---

## Session Tracking

Check `progress.txt` for current project state and what to work on next.

---

## Key Decisions

1. **Single-page layout** - All sections scroll vertically, no routing needed
2. **Left sidebar nav** - Fixed position, collapses on mobile
3. **No CSS framework** - Custom CSS for full aesthetic control
4. **Content in JS file** - Easy to update without touching components
