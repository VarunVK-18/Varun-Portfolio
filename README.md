# Varun Portfolio

A modern, minimalist developer portfolio crafted with **React 19**, **Vite**, and **vanilla CSS**.

## ✨ Design Principles

- **Minimalist 2-Color Palette**: Deep Obsidian base (`#0b0f17`) with Electric Cyan accent (`#00f2fe`).
- **Standard Static Typography**: Only 2 font styles — `Space Grotesk` (Titles & Headings) and `Inter` (Descriptions & Body).
- **Icons Only (No Emojis)**: Clean SVG vector icons for all actions, links, metrics, and categories.
- **Micro-Animations & Dynamic Scrolling**:
  - Live top-window reading progress bar.
  - Staggered IntersectionObserver scroll-reveal animations.
  - Interactive hover text gradient animations with soft glow effects.
  - Glassmorphic sticky navbar with active section detection.

## 🗂️ Component-Wise Project Structure

```
src/
├── data/
│   └── portfolioData.js               # Resume and portfolio data
├── hooks/
│   └── useScrollReveal.js             # Scroll-trigger animation hook
├── components/
│   ├── ScrollProgress/                # Top progress bar
│   ├── Navbar/                        # Sticky navigation header
│   ├── Hero/                          # Hero & metrics
│   ├── About/                         # Bio & principles
│   ├── Experience/                    # Work experience timeline
│   ├── Projects/                      # Featured projects showcase
│   ├── Skills/                        # Categorized technical competencies
│   ├── Contact/                       # Contact details & message form
│   ├── Footer/                        # Footer & back-to-top button
│   └── Icons/                         # Clean custom SVG icons
├── App.jsx
├── App.css
├── index.css                          # Design tokens & color system
└── main.jsx
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

## 📝 Updating Your Resume / Information

Simply edit `src/data/portfolioData.js` to customize:
- Personal details, bio, and social links
- Work experience and timeline achievements
- Featured projects, links, and technologies
- Skills breakdown
