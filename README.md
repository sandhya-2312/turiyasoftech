# Turiya Softech Landing Page

A modern responsive landing page built with React + Vite + Tailwind CSS.

## Features

- Transparent fixed navbar over hero section
- Navbar background + shadow on scroll
- Desktop dropdown menus with hover transitions
- Mobile hamburger menu with expandable dropdown items
- Full-screen hero section with dark readable overlay
- Smooth animated background image effect (cinematic zoom)
- Reusable button style variants (`corporate` and `boldModern`)

## Tech Stack

- React
- Vite
- Tailwind CSS

## Project Structure

- `src/components/Navbar.jsx` - responsive navbar with dropdowns and CTA
- `src/components/Hero.jsx` - full-screen hero section and CTA
- `src/styles/buttonVariants.js` - centralized button hover/style variants
- `src/pages/HomePage.jsx` - page composition for navbar + hero
- `src/index.css` - Tailwind imports and custom hero animation keyframes

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Design Notes

- Navbar includes a thin white separator line at the bottom for premium contrast.
- CTA buttons are rectangular and use shared style variants from `buttonVariants`.
- Hero currently uses an animated background image (no video required).

## Button Variant Switch

To switch global button style, edit `src/styles/buttonVariants.js`:

- `"corporate"` for subtle hover
- `"boldModern"` for gradient glow hover