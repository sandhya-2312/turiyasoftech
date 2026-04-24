# Turiya Softech Website

A modern, responsive multi-page website built with React, Vite, and Tailwind CSS.

## Features

- Fixed responsive navbar with desktop dropdowns and mobile expandable navigation
- Clickable Solutions navigation with dedicated listing and detail routes
- Cinematic hero section with rotating backgrounds and animated indicators
- Rich page set for About, Blog, Careers, Industries, Products, and Contact
- Solutions showcase backed by shared structured data for consistency
- Reusable CTA styles and animated section interactions
- Custom spiral favicon for browser tab branding

## Tech Stack

- React
- Vite
- Tailwind CSS

## Routes

- `/` - Home page
- `/about` - About page
- `/blog` - Blog page
- `/careers` - Careers page
- `/solutions` - Solutions listing page
- `/solutions/:solutionId` - Individual solution detail page
- `/industries` - Industries page
- `/products` - Products page
- `/contact` - Contact page

## Project Structure

- `src/App.jsx` - centralized route configuration
- `src/pages/` - route-level pages (Home, About, Blog, Careers, Solutions, Industries, Products, Contact)
- `src/components/Navbar.jsx` - responsive navbar with dropdown routing
- `src/components/DesignSolutions.jsx` - home solutions showcase section
- `src/data/solutionsData.js` - shared solutions content used by multiple pages
- `src/components/Hero.jsx` - hero section with rotating background slides
- `src/components/ContactCardSection.jsx` and `src/components/Footer.jsx` - reusable site-wide sections
- `src/ui/buttonStyles.js` - shared CTA button styles
- `src/index.css` - Tailwind imports and custom animations
- `public/favicon.svg` - custom spiral favicon

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