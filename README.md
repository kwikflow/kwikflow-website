# Kwikflow - Premium Agency Website

A high-end agency website built for **Kwikflow.nl** — AI automatization for Dutch tradespeople (loodgieters, elektriciens, dakdekkers, etc.).

## 🎯 Project Overview

This is a Next.js 14 website designed to convert Dutch tradespeople into customers by showcasing premium design, clear value proposition, and professional presentation. The website features:

- **12 Comprehensive Sections** covering the complete customer journey
- **Dark Premium Design** with cyan accent colors and glassmorphism effects
- **Pure CSS Animations** using Tailwind CSS and CSS keyframes (no external animation libraries)
- **Intersection Observer API** for smooth scroll-based animations
- **Mobile-First Responsive Design**
- **TypeScript** for type safety
- **Production-Ready** for Vercel deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 20 or higher
- npm or your preferred package manager

### Installation

```bash
# Clone or navigate to the repository
cd kwikflow-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your website.

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter, Syne)
- **Animations**: CSS Keyframes + Intersection Observer API
- **Deployment**: Vercel

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0A0F1E` (Navy)
- **Secondary**: `#1B2A5E` (Navy Dark)
- **Accent**: `#00C8E8` (Cyan)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#94A3B8` (Grey)

### Typography
- **Body**: Inter (Regular, Medium, Semibold, Bold)
- **Headlines**: Syne (Bold, Extra Bold)

### Components
- **Glassmorphism Cards**: Semi-transparent background with blur effect
- **Glow Effects**: Cyan border glow on hover
- **Animations**: Fade-in, slide-in, floating, counter animations

## 📄 Website Sections

1. **Navbar** - Sticky navigation with logo and CTA
2. **Hero** - Full-screen hero with animated gradient mesh background
3. **Social Proof Bar** - Trade type icons showing industry trust
4. **Problem Section** - 3 glassmorphic cards addressing pain points
5. **Solution** - Step-by-step flow (5 steps)
6. **Services** - Tabbed interface with 6 service categories
7. **Bundles** - 3-tier pricing (Starter, Groei, Pro)
8. **Free Start** - Call-to-action section for free offers
9. **Results** - Animated number counters showing proven results
10. **How It Works** - 4-step horizontal flow with badges
11. **Contact** - Contact form with glassmorphism styling
12. **Footer** - Complete footer with links and contact info

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production build locally
npm start

# Run linter
npm run lint
```

### Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with fonts
│   ├── globals.css       # Global styles and animations
│   └── page.tsx          # Main page with all components
├── components/           # React components for each section
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SocialProofBar.tsx
│   ├── ProblemSection.tsx
│   ├── Solution.tsx
│   ├── Services.tsx
│   ├── Bundles.tsx
│   ├── FreeStart.tsx
│   ├── Results.tsx
│   ├── HowItWorks.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── hooks/
    └── useIntersectionObserver.ts  # Custom hook for scroll animations
```

## 🎬 Animations

All animations use pure CSS and the Intersection Observer API:

- **Fade In**: Elements fade in on scroll
- **Slide In**: Elements slide in from left/right
- **Floating**: Continuous floating motion for orbs
- **Glow Pulse**: Interactive glow effect on hover
- **Counter**: Animated number counters for statistics
- **Stagger**: Sequential animation delays for card layouts

### Scroll Animation System

The `useIntersectionObserver` hook automatically:
- Triggers animations when elements enter viewport
- Adds appropriate delay classes for staggered effects
- Handles threshold and margin settings
- Supports one-time animation or continuous re-animation

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: Default (320px and up)
- **Tablet**: `sm:` (640px), `md:` (768px)
- **Desktop**: `lg:` (1024px)

## 🚢 Deployment to Vercel

### One-Click Deployment

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

None required for this project (all content is static). If you add a contact form backend, configure appropriate environment variables in Vercel dashboard.

## ✅ Deployment Checklist

- [x] Next.js 14 with TypeScript
- [x] Tailwind CSS configured
- [x] No external animation libraries (CSS-only)
- [x] Responsive mobile-first design
- [x] Meta tags and SEO optimization
- [x] Google Fonts integrated
- [x] Vercel deployment files included
- [x] ESLint configured
- [x] No console warnings
- [x] Build optimized and passing

## 🎯 Performance

- **Zero external animation libraries** - Pure CSS and JS
- **Optimized images** - Using Next.js Image component
- **Code splitting** - Automatic with App Router
- **Lazy loading** - Intersection Observer triggers animations
- **Minified CSS/JS** - Production build optimized

## 🔐 Best Practices

✅ TypeScript for type safety
✅ Component-based architecture
✅ Semantic HTML
✅ Accessibility-first design
✅ Performance optimized
✅ SEO friendly meta tags
✅ Mobile responsive
✅ Clean, maintainable code

## 📝 Customization

### Change Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'kwik-cyan': '#YOUR_COLOR',
  // ... other colors
}
```

### Update Content

Edit individual component files in `src/components/`

### Modify Animations

Edit `src/app/globals.css` for animation keyframes or component classes

## 📞 Support

For questions about deployment or customization, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

**Built for Kwikflow.nl** — Making Dutch tradespeople unstoppable. 🚀

© 2026 Kwikflow. All rights reserved.
