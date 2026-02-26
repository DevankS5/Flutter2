# FLUTTER AGENCY WEBSITE — MASTER GENERATION PROMPT

> **Forensic-Level Design & Development Specification**
> **Project:** Premium Flutter Development Agency Landing Page
> **Theme:** White & Blue — Clean, Trustworthy, Modern
> **Tech Stack:** Next.js 14+ (App Router), React 18+, TypeScript, Tailwind CSS 4, Framer Motion, shadcn/ui, OGL (WebGL)
> **Generated:** 2026-02-27

---

## TABLE OF CONTENTS

1. [Overall Concept & Design Philosophy](#1--overall-concept--design-philosophy)
2. [Color System & Theme Specification](#2--color-system--theme-specification)
3. [Typography System](#3--typography-system)
4. [Background & Ambient Effects](#4--background--ambient-effects)
5. [Navigation Bar](#5--navigation-bar)
6. [Hero Section](#6--hero-section)
7. [Trusted By / Social Proof Marquee](#7--trusted-by--social-proof-marquee)
8. [Services Section](#8--services-section)
9. [Why Choose Us Section](#9--why-choose-us-section)
10. [How It Works (Process) Section](#10--how-it-works-process-section)
11. [Featured Projects / Portfolio Section](#11--featured-projects--portfolio-section)
12. [Testimonials Section](#12--testimonials-section)
13. [Pricing Section](#13--pricing-section)
14. [FAQ Section](#14--faq-section)
15. [Contact / CTA Section](#15--contact--cta-section)
16. [Footer](#16--footer)
17. [Animation Catalog](#17--animation-catalog)
18. [Hover State Catalog](#18--hover-state-catalog)
19. [Scroll-Based Behaviors](#19--scroll-based-behaviors)
20. [Micro-Interactions](#20--micro-interactions)
21. [WebGL Ambient Shader](#21--webgl-ambient-shader)
22. [Responsive Behavior](#22--responsive-behavior)
23. [Performance Optimization](#23--performance-optimization)
24. [Accessibility Features](#24--accessibility-features)
25. [State Management Patterns](#25--state-management-patterns)
26. [SEO & Meta](#26--seo--meta)
27. [File & Component Structure](#27--file--component-structure)

---

## 1 — OVERALL CONCEPT & DESIGN PHILOSOPHY

Build a **premium white-themed landing page** for a Flutter development agency. The website must feel **clean, expansive, and trustworthy** — like a polished SaaS product itself. The design language draws from the best of modern agency sites, combining a **bright white canvas** with **rich blue accents** that convey professionalism and technical excellence.

### Core Design Principles

1. **White Space as a Feature:** Generous padding and margins everywhere. Content breathes. Nothing feels cramped.
2. **Blue Depth Hierarchy:** Use a spectrum of blues — from deep navy for headings to electric/royal blue for CTAs and accents, to soft sky-blue for subtle backgrounds and glows.
3. **Glassmorphism on Light:** Instead of dark frosted glass, use **light frosted glass** — translucent white panels with subtle blue-tinted borders, gentle backdrop blur, and soft shadows. Cards appear to float above the background.
4. **Living but Subtle:** A delicate animated mesh-gradient / aurora background effect in soft blues and whites sits behind content. It moves slowly — ambient, never distracting.
5. **Depth Through Layers:** Every surface has intentional depth — cards have layered shadows, sections use subtle gradients, and interactive elements lift on hover.
6. **Premium Motion:** Every transition is butter-smooth. Elements enter the viewport with staggered fade-up animations. Hover states have micro-scale and glow effects. Nothing pops — everything *flows*.

### Visual Identity Summary

| Attribute | Value |
|-----------|-------|
| **Primary Background** | Pure White (`#FFFFFF`) to soft gray (`#F8FAFC`) |
| **Primary Accent** | Royal Blue (`#2563EB`) |
| **Secondary Accent** | Deep Navy (`#1E3A5F`) |
| **Glow / Highlight** | Electric Blue (`#3B82F6`) with 20-40% opacity glow |
| **Text Primary** | Slate 900 (`#0F172A`) |
| **Text Secondary** | Slate 500 (`#64748B`) |
| **Glass Effect** | `bg-white/70 backdrop-blur-xl border border-blue-100/50` |
| **Overall Feeling** | Clean. Trustworthy. Technically Excellent. Alive. |

---

## 2 — COLOR SYSTEM & THEME SPECIFICATION

### Primary Palette

```css
/* === BLUES === */
--blue-50:  #EFF6FF;   /* Section backgrounds, subtle tints */
--blue-100: #DBEAFE;   /* Card borders, dividers */
--blue-200: #BFDBFE;   /* Hover borders, secondary elements */
--blue-300: #93C5FD;   /* Active states, secondary accents */
--blue-400: #60A5FA;   /* Interactive highlights */
--blue-500: #3B82F6;   /* Primary buttons, links, electric glow */
--blue-600: #2563EB;   /* Primary CTA buttons, main accent */
--blue-700: #1D4ED8;   /* Hover state for primary CTA */
--blue-800: #1E40AF;   /* Deep accents, footer backgrounds */
--blue-900: #1E3A8A;   /* Headings, deep navy accents */
--blue-950: #172554;   /* Darkest text on white */

/* === NEUTRALS === */
--white:     #FFFFFF;
--slate-50:  #F8FAFC;   /* Alternating section backgrounds */
--slate-100: #F1F5F9;   /* Card backgrounds, input backgrounds */
--slate-200: #E2E8F0;   /* Borders, dividers */
--slate-300: #CBD5E1;   /* Muted icons, placeholders */
--slate-400: #94A3B8;   /* Secondary text */
--slate-500: #64748B;   /* Body text secondary */
--slate-600: #475569;   /* Body text primary */
--slate-700: #334155;   /* Subheadings */
--slate-800: #1E293B;   /* Headings */
--slate-900: #0F172A;   /* Primary headings, strongest text */

/* === SEMANTIC === */
--success: #10B981;    /* Checkmarks, success states */
--warning: #F59E0B;    /* Star ratings (golden) */
--gradient-start: #EFF6FF;  /* Section gradient from */
--gradient-end:   #FFFFFF;  /* Section gradient to */
```

### Gradient Definitions

```css
/* Hero gradient overlay */
.hero-gradient {
  background: linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 50%, #DBEAFE 100%);
}

/* CTA button gradient */
.cta-gradient {
  background: linear-gradient(135deg, #2563EB 0%, #3B82F6 100%);
}

/* Card hover glow */
.card-glow {
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.08), 0 0 80px rgba(59, 130, 246, 0.04);
}

/* Section separator gradient line */
.section-divider {
  background: linear-gradient(90deg, transparent, #3B82F6, transparent);
  height: 1px;
}

/* Heading gradient text (used sparingly) */
.gradient-text {
  background: linear-gradient(135deg, #1E3A8A, #3B82F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Glass Effect Variants

```css
/* Standard Light Glass */
.glass-light {
  background: rgba(255, 255, 255, 0.70);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.10);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

/* Enhanced Light Glass (for featured/premium elements) */
.glass-light-enhanced {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(59, 130, 246, 0.15);
  box-shadow: 0 12px 48px rgba(59, 130, 246, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

/* Navigation Glass */
.glass-nav {
  background: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(59, 130, 246, 0.08);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.03);
}

/* Subtle Blue Glass (for special cards) */
.glass-blue {
  background: rgba(239, 246, 255, 0.60);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(59, 130, 246, 0.12);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.06);
}
```

---

## 3 — TYPOGRAPHY SYSTEM

### Font Family
**Primary:** `Inter` — loaded via `next/font/google` with `display: "swap"` and `subsets: ["latin"]`
**Fallback:** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

### Font Preloading
```html
<link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" fetchPriority="high" />
```

### Type Scale

| Token | Size (Mobile) | Size (Desktop) | Weight | Letter Spacing | Line Height | Usage |
|-------|---------------|----------------|--------|----------------|-------------|-------|
| `display-xl` | 40px / 2.5rem | 72px / 4.5rem | 800 (ExtraBold) | -0.03em | 1.05 | Hero headline |
| `display-lg` | 32px / 2rem | 56px / 3.5rem | 800 | -0.025em | 1.1 | Section headlines |
| `display-md` | 28px / 1.75rem | 40px / 2.5rem | 700 (Bold) | -0.02em | 1.15 | Sub-section headlines |
| `heading-lg` | 24px / 1.5rem | 32px / 2rem | 700 | -0.015em | 1.2 | Card titles |
| `heading-md` | 20px / 1.25rem | 24px / 1.5rem | 600 (SemiBold) | -0.01em | 1.3 | Subsection titles |
| `heading-sm` | 16px / 1rem | 18px / 1.125rem | 600 | -0.005em | 1.4 | Small headings |
| `body-lg` | 18px / 1.125rem | 20px / 1.25rem | 400 (Regular) | 0 | 1.6 | Hero description text |
| `body-md` | 16px / 1rem | 16px / 1rem | 400 | 0 | 1.6 | Body copy |
| `body-sm` | 14px / 0.875rem | 14px / 0.875rem | 400 | 0 | 1.5 | Secondary body text |
| `label` | 11px / 0.6875rem | 12px / 0.75rem | 600 | 0.15em | 1.2 | Badges, labels, overlines (UPPERCASE) |
| `caption` | 12px / 0.75rem | 13px / 0.8125rem | 500 | 0.02em | 1.4 | Captions, tooltips, meta |

### Text Color Hierarchy

```css
/* Primary heading — maximum contrast */
.text-heading   { color: #0F172A; }  /* slate-900 */

/* Subheading — strong but not dominant */
.text-subheading { color: #1E293B; }  /* slate-800 */

/* Body text — comfortable reading */
.text-body      { color: #475569; }  /* slate-600 */

/* Secondary / muted text */
.text-muted     { color: #64748B; }  /* slate-500 */

/* Accent text — blue highlights */
.text-accent    { color: #2563EB; }  /* blue-600 */

/* Heading with gradient (used sparingly for hero) */
.text-gradient {
  background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 4 — BACKGROUND & AMBIENT EFFECTS

### Concept
The entire page sits on top of a **subtle animated mesh gradient background** that stays fixed while content scrolls. Unlike the dark plasma of the reference, this is a **light, airy, ethereal effect** — think soft blue aurora wisps on a white canvas.

### Visual Description
- **Base color:** Pure white (`#FFFFFF`)
- **Animated elements:** Soft, slowly morphing gradient blobs in sky-blue (`#DBEAFE`), pale blue (`#EFF6FF`), and subtle lavender-blue (`#C7D2FE`)
- **Movement:** Extremely slow (0.5x–0.8x speed), organic drift — like clouds passing or water reflections
- **Opacity:** Very low (15-25%) — atmospheric, never competing with content
- **Position:** `fixed inset-0 z-0` — covers entire viewport, stays behind everything

### Implementation (OGL WebGL)

```tsx
<div className="fixed inset-0 z-0 bg-white">
  <AmbientMesh
    speed={0.6}
    scale={1.5}
    opacity={0.20}
    colors={["#DBEAFE", "#EFF6FF", "#C7D2FE"]}
    mouseInteractive={true}
    direction={1}
  />
</div>
```

### Fragment Shader (Conceptual — Soft Blue Mesh)

The shader should produce gentle, flowing caustic-like patterns in blues on a white background. Key characteristics:
- Use 3-4 overlapping sine waves at different frequencies for organic motion
- Colors should blend through the blue palette, never harsh
- Mouse interaction: very subtle — a gentle warping/attraction near cursor (desktop only)
- On mobile: disable mouse interaction, reduce resolution to 0.5x DPR, lower speed to 0.3x

### Performance Constraints

```typescript
const dpr = Math.max(0.5, Math.min(
  window.devicePixelRatio || 1,
  isMobile ? 1 : 2
) * (isIOS || isMobile ? 0.5 : 1));

const targetDelta = isMobile ? 50 : 33; // ~20fps mobile, ~30fps desktop
```

### Accessibility
```typescript
const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
const saveData = (navigator as any)?.connection?.saveData === true;

if (prefersReducedMotion || saveData) {
  // Render a static soft gradient instead of animated WebGL
  return <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />;
}
```

### Visibility Pause
```typescript
document.addEventListener("visibilitychange", () => {
  if (document.hidden) cancelAnimationFrame(raf);
  else raf = requestAnimationFrame(loop);
});
```

### Fallback (No WebGL)
If WebGL is not available or fails to initialize:
```tsx
<div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/30" />
```

---

## 5 — NAVIGATION BAR

### Concept
A **pill-shaped floating navigation bar** that sticks to the top of the viewport. It uses the light glass effect, appearing as a translucent white bar with a subtle blue-tinted border.

### Visual Appearance
- **Shape:** Horizontal pill with fully rounded ends (`rounded-full`)
- **Effect:** Light frosted glass — `glass-nav` class (white/80 + blur + subtle blue border)
- **Margins:** `mx-4 md:mx-8 mt-4` — floats with padding, NOT edge-to-edge
- **Shadow:** Very subtle — `shadow-[0_4px_24px_rgba(0,0,0,0.03)]`
- **Top highlight:** `inset 0 1px 0 rgba(255,255,255,0.9)` for glass light reflection
- **Position:** `sticky top-0 z-50 p-4`
- **Max width:** Content constrained to `max-w-7xl mx-auto`

### Layout (Left to Right)

1. **Logo + Brand Name:**
   - Flutter icon (blue, 24x24) + Brand name in semibold slate-900 text
   - Font: 18px, weight 700
   - Logo has a subtle blue glow on hover

2. **Navigation Links (Desktop only, visible ≥ 1024px):**
   - `Home` — anchor link
   - `Services` — dropdown trigger with chevron
   - `Why Us` — anchor link
   - `Projects` — anchor link
   - `Pricing` — anchor link
   - `Contact` — anchor link
   - Default: `text-slate-600 font-medium text-sm`
   - Hover: `text-blue-600 transition-colors duration-200`
   - Active: `text-blue-600 font-semibold`

3. **CTA Button (Desktop only):**
   - Label: `"Book Free Consultation"`
   - Style: `bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-6 py-2.5 font-medium text-sm`
   - Hover: `shadow-lg shadow-blue-500/25 scale-[1.02] transition-all duration-200`
   - Subtle glow: `hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]`

4. **Hamburger Menu (Mobile only, < 1024px):**
   - Three-line icon in slate-600
   - Button: `border border-slate-200 bg-white/80 rounded-lg p-2`
   - Opens a Sheet slide-out from the right

### Services Dropdown (Desktop)

When "Services" is hovered/clicked:
- Light frosted glass dropdown with blur: `glass-light-enhanced`
- Rounded corners: `rounded-2xl`
- Padding: `p-4`
- Width: `w-[400px]`
- Appears with `fade-in + slide-down` animation (200ms)

Each service item:
- Layout: Icon (left, 40x40 blue circle bg) → Title + Description (right)
- Default: transparent background
- Hover: `bg-blue-50 rounded-xl ring-1 ring-blue-200/60 shadow-[0_0_20px_rgba(59,130,246,0.08)]`
- Icon color on hover: `text-blue-500 → text-blue-600`
- Title on hover: `text-slate-800 → text-blue-600`
- Transition: `transition-all duration-200`

Services listed:
1. **Flutter App Development** — "Cross-platform mobile apps built with Flutter for iOS & Android"
2. **UI/UX Design** — "Beautiful, intuitive interfaces designed for maximum user engagement"
3. **Backend Development** — "Scalable server architecture, APIs, and cloud infrastructure"
4. **App Maintenance** — "Ongoing support, updates, and performance optimization"

### Services Chevron
```css
transition duration-300 group-data-[state=open]:rotate-180
```

### Mobile Menu (Sheet)

- Slides in from right: `500ms ease open`, `300ms ease close`
- Background: `bg-white/95 backdrop-blur-2xl`
- Width: 85% of viewport, max 400px
- Overlay: `bg-black/20 backdrop-blur-sm`

Content layout:
1. **Brand logo + Close button** at top
2. **Nav links** — stacked vertically, each with `py-3 border-b border-slate-100`
   - "Services" is collapsible/accordion — expands to show service sub-links
   - Each link: `text-slate-700 text-lg font-medium`
   - Hover/Active: `text-blue-600 bg-blue-50/50`
3. **CTA button** at bottom — full width, same gradient style as desktop

---

## 6 — HERO SECTION

### Concept
The hero is the visual centerpiece — a massive, confidence-inspiring first impression that immediately communicates: "We build Flutter apps that ship fast and look incredible."

### Layout
- **Container:** Full viewport height minus nav (`min-h-[calc(100vh-120px)]`)
- **Content alignment:** Centered horizontally and vertically
- **Max width:** `max-w-5xl mx-auto`
- **Padding:** `pt-24 pb-16 px-6 md:px-8`
- **Background:** Subtle radial gradient overlay on top of the ambient mesh
  ```css
  background: radial-gradient(ellipse at 50% 30%, rgba(219, 234, 254, 0.3) 0%, transparent 70%);
  ```

### Elements (Top to Bottom)

#### 1. Overline Badge
- Small pill badge above headline
- Text: `"✦ FLUTTER DEVELOPMENT AGENCY"` in uppercase
- Style: `bg-blue-50 text-blue-600 border border-blue-200/50 rounded-full px-4 py-1.5`
- Font: 11px, weight 600, letter-spacing 0.15em
- Animation: Fades in first (delay 0ms), subtle scale from 0.95

#### 2. Main Headline (3 Lines)

```
STOP PLANNING.
START LAUNCHING.
WE BUILD APPS THAT SHIP.
```

- Line 1: `text-slate-900` — ExtraBold, tight tracking
- Line 2: **Gradient text** — `background: linear-gradient(135deg, #1E3A8A, #2563EB, #3B82F6)` with `-webkit-background-clip: text` — same ExtraBold
- Line 3: `text-slate-900` — ExtraBold
- Size: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` (scales from 40px to 72px)
- Weight: 800
- Letter spacing: -0.03em
- Line height: 1.05
- Max width: `max-w-4xl`
- Animation: Each line fades up with 100ms stagger (line 1: 100ms, line 2: 200ms, line 3: 300ms)
- The gradient text line has a subtle animated glow:
  ```css
  text-shadow: 0 0 40px rgba(37, 99, 235, 0.15), 0 0 80px rgba(59, 130, 246, 0.08);
  ```

#### 3. Sub-headline Description
- Text: `"We craft high-performance Flutter applications that help startups and enterprises move faster, launch sooner, and grow smarter."`
- Style: `text-lg md:text-xl text-slate-500 font-normal max-w-2xl mx-auto`
- Line height: 1.6
- Animation: Fade up, delay 400ms

#### 4. CTA Button Group
Two buttons side by side on desktop, stacked on mobile:

**Primary CTA:**
- Label: `"GET A FREE QUOTE"`
- Style: `bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-8 py-4 font-semibold text-base`
- Hover: `shadow-xl shadow-blue-500/30 scale-[1.03]`
- Glow: `shadow-[0_0_30px_rgba(59,130,246,0.25)]` always visible
- Icon: Arrow-right icon after text
- Links to Cal.com booking or contact section

**Secondary CTA:**
- Label: `"VIEW OUR WORK"`
- Style: `glass-light text-slate-700 rounded-full px-8 py-4 font-semibold text-base border border-blue-200/50`
- Hover: `bg-blue-50 border-blue-300/50 text-blue-700`
- Icon: Play icon or arrow icon before text
- Scrolls to Projects section

Animation: Both buttons fade up, delay 500ms

#### 5. Social Proof Strip (Below CTAs)
A small trust indicator:
- Three overlapping circular avatar images (-ml-2 overlap)
- Text: `"Trusted by 50+ clients worldwide"` in slate-500
- Small star cluster: 5 gold stars with `"4.9/5 average rating"`
- Animation: Fade up, delay 600ms

#### 6. Hero Visual (Phone Mockup Grid)

A row of **phone-shaped cards** showing app screenshots/videos — proving the agency's work quality.

**Responsive layout:**
- Mobile: 1-2 cards visible with horizontal scroll
- Tablet: 3 cards
- Desktop: 4-5 cards in a row

**Each phone card:**
- **Shape:** `aspect-[9/19]` (phone screen proportions)
- **Frame:** `glass-light rounded-[2rem] overflow-hidden border border-blue-100/50`
- **Content:** Static app screenshot or auto-playing looped video
- **Shadow:** `shadow-xl shadow-blue-500/5`
- **Hover:** Subtle lift `translate-y-[-4px]` + increased shadow + faint blue border glow
- **Content overlay at top:** Small pill badge with app name + category

**Video behavior:**
- Uses `IntersectionObserver` to lazy-load
- `rootMargin: "80px"`, `threshold: 0.15`
- Autoplay, muted, loop, playsinline
- Pauses when out of viewport
- `preload="none"` until visible

**Animation:** Cards enter with staggered fade-up (100ms gap between each card), delay starting at 700ms

---

## 7 — TRUSTED BY / SOCIAL PROOF MARQUEE

### Concept
An infinite-scrolling marquee of client/partner logos that builds credibility. Two rows scrolling in opposite directions.

### Section Header
- Left side: Heading `"Trusted by industry leaders"` with `"industry leaders"` highlighted in gradient-text blue
- Right side: `"See Case Studies"` button with `glass-light` style and arrow icon
- Alignment: `flex justify-between items-center`

### Row 1 (Scrolls Right → Left)
```css
@keyframes scroll-right {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-33.333%); }
}
.animate-scroll-right {
  animation: scroll-right 45s linear infinite;
}
```

### Row 2 (Scrolls Left → Right)
```css
@keyframes scroll-left {
  0%   { transform: translateX(-33.333%); }
  100% { transform: translateX(0%); }
}
.animate-scroll-left {
  animation: scroll-left 45s linear infinite;
}
```

### Logo Cards
- Shape: `w-[140px] h-[70px] rounded-xl`
- Style: `glass-light` — white/70 bg with blur and subtle blue border
- Logo image: `object-contain` centered, grayscale by default
- Logo hover: Full color + slight scale `1.05` + blue border glow
- Gap between cards: `gap-6`
- Each row contains logos duplicated **3x** for seamless infinite loop

### Pause on Hover
```tsx
onMouseEnter={() => setPausedRow("row1")}
onMouseLeave={() => setPausedRow(null)}

style={{ animationPlayState: pausedRow === "row1" ? "paused" : "running" }}
```

### Edge Fade
```tsx
<div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
```

### Logos to Include (Placeholder Company Names)
Row 1: TechFlow, NexaApps, LaunchPad, DigiCraft, AppForge, CodeWave, PixelNova, StartupKit
Row 2: CloudBase, FlutterMax, BlueStack, DevPulse, BuildRight, SmartApps, InnoTech, CoreLogic

---

## 8 — SERVICES SECTION

### Concept
A clean, card-based services grid with animated GIF/Lottie illustrations. Inspired by FlutterYourWay's approach but elevated with glass effects and blue theme.

### Section Layout
- **Background:** Alternating — `bg-slate-50/50` with subtle `bg-gradient-to-b from-slate-50/50 to-white`
- **Overline:** `"WHAT WE DO"` — blue label badge, same style as hero badge
- **Headline:** `"Services We Provide"` — display-lg, slate-900
- **Sub-headline:** `"We build robust apps through collaborative development that turns your vision into reality."` — body-lg, slate-500
- **Max width:** `max-w-7xl mx-auto`
- **Padding:** `py-24 px-6 md:px-8`

### Card Grid
- **Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Alignment:** All cards same height (`items-stretch`)

### Each Service Card

**Structure:**
1. **Animated illustration** (top) — Lottie animation or high-quality GIF in `aspect-[4/3]` container, `rounded-t-2xl overflow-hidden bg-blue-50/50`
2. **Content** (bottom) — `p-6`
   - Service label: `label` style, uppercase, blue-500
   - Service title: `heading-md`, slate-900, font-bold
   - Description: `body-md`, slate-500
   - Arrow link: `"Learn More →"` in blue-600, hover underline

**Card styling:**
- `glass-light rounded-2xl overflow-hidden`
- Border: `border border-blue-100/40`
- Shadow: `shadow-lg shadow-blue-500/[0.03]`
- Hover: `translate-y-[-4px] shadow-xl shadow-blue-500/[0.06] border-blue-200/60 transition-all duration-300`

### Services List

1. **Startup & MVP Development**
   - Icon: Rocket
   - Description: "Quickly validate your concept with a market-ready MVP that captures your core idea and gets users fast."

2. **Full-Cycle App Development**
   - Icon: Code/Layers
   - Description: "End-to-end app creation: design, development, testing, and store deployment — all under one roof."

3. **Custom Flutter Solutions**
   - Icon: Puzzle
   - Description: "Bespoke applications tailored to your unique business challenges, built for scale and performance."

4. **UI/UX Design**
   - Icon: Paintbrush/Figma
   - Description: "Beautiful, intuitive interfaces crafted with user psychology in mind for maximum engagement and retention."

5. **Backend & API Development**
   - Icon: Server/Database
   - Description: "Scalable server architecture with Firebase, Supabase, or custom APIs built for real-time performance."

6. **App Store Deployment & Maintenance**
   - Icon: Upload/Shield
   - Description: "We handle the entire submission process for App Store & Play Store, plus ongoing maintenance and support."

### Animation
- Cards enter viewport with staggered `fade-up` via Framer Motion
- Stagger: 100ms per card
- Duration: 500ms each
- Easing: `[0.25, 0.1, 0.25, 1]` (smooth ease-out)

---

## 9 — WHY CHOOSE US SECTION

### Concept
Stats + value propositions in a visually impactful layout. Combines hard numbers with compelling reasons.

### Section Layout
- **Background:** White with subtle blue radial glow at center: `bg-[radial-gradient(ellipse_at_center,rgba(219,234,254,0.3)_0%,transparent_70%)]`
- **Overline Badge:** `"WHY US"`
- **Headline:** `"Passionate developers dedicated to empowering your business"`
- **Max width:** `max-w-7xl mx-auto`

### Stats Row
Horizontal row of 4 stat cards on desktop, 2x2 grid on mobile:

| Stat | Value | Label |
|------|-------|-------|
| 1 | `50+` | Projects Completed |
| 2 | `30+` | Happy Clients |
| 3 | `4+` | Years of Experience |
| 4 | `4.9` | Average Rating |

**Each stat card:**
- `glass-light rounded-2xl p-6 text-center`
- Number: `display-lg text-blue-600 font-extrabold`
- Number has animated count-up on scroll (using IntersectionObserver)
- Label: `body-sm text-slate-500 mt-2`
- Subtle blue bottom border accent: `border-b-2 border-blue-500`

### Value Propositions Grid
2-column grid below stats:

**Card 1: "Speed That Delivers"**
- Icon: Zap/Lightning in blue circle
- Title: `heading-md`
- Description: "From idea to App Store in weeks, not months. Our streamlined Flutter workflow means you launch before your competition."
- Visual: Timeline graphic or fast-forward icon

**Card 2: "Cross-Platform Excellence"**
- Icon: Smartphone + Tablet
- Title: `heading-md`
- Description: "One codebase, every platform. iOS, Android, Web, and Desktop — all from a single Flutter codebase that we masterfully craft."

**Card 3: "Pixel-Perfect Design"**
- Icon: Sparkles/Star
- Description: "Every screen, every animation, every interaction is designed to delight users and keep them coming back."

**Card 4: "Transparent Process"**
- Icon: Eye/Layers
- Description: "Weekly updates, shared Figma files, open Slack channels. You're never in the dark about your project's progress."

Card styles match Services cards but with a more horizontal layout (icon left, text right).

---

## 10 — HOW IT WORKS (PROCESS) SECTION

### Concept
A step-by-step vertical timeline showing the agency's development process. Clean, numbered steps with connector lines.

### Section Layout
- **Background:** `bg-slate-50/50`
- **Overline Badge:** `"OUR PROCESS"`
- **Headline:** `"How We Build Your App"`
- **Sub-headline:** `"Our streamlined process for building high-quality Flutter apps"`

### Timeline Layout
- Desktop: Alternating left-right layout with a center vertical connector line
- Tablet: All steps on one side of the line
- Mobile: Stacked vertically, no line, cards full width

### Center Connector Line (Desktop/Tablet)
```css
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #3B82F6, #3B82F6, transparent);
}
```

### Steps

#### Step 01 — Discovery Call
- **Icon:** Phone icon in a blue-500 circle
- **Number badge:** `"01"` in blue-600, large bold
- **Title:** `"Discovery Call"`
- **Description:** `"First, we learn your vision and requirements to define a clear project strategy and scope."`
- **Card style:** `glass-light rounded-2xl p-6`

#### Step 02 — UI/UX Design
- **Icon:** Paintbrush icon
- **Number badge:** `"02"`
- **Title:** `"Design"`
- **Description:** `"We create stunning, user-centric designs in Figma with full prototyping and iteration rounds."`

#### Step 03 — Development
- **Icon:** Code icon
- **Number badge:** `"03"`
- **Title:** `"Development"`
- **Description:** `"Our developers turn your designs into clean, scalable Flutter code built for the future."`

#### Step 04 — Testing & QA
- **Icon:** Shield-check icon
- **Number badge:** `"04"`
- **Title:** `"Testing"`
- **Description:** `"Rigorous testing ensures your app is bug-free, responsive, and seamless across all devices."`

#### Step 05 — Deployment
- **Icon:** Rocket icon
- **Number badge:** `"05"`
- **Title:** `"Deployment"`
- **Description:** `"We handle App Store & Play Store submission and ensure a smooth, successful launch."`

### Connector Dots
At each step's intersection with the timeline line, there is a larger dot:
```css
.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #2563EB;
  border: 3px solid white;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
}
```

### Animation
- Timeline line draws itself downward as the user scrolls (using Framer Motion's `useScroll` + `useTransform`)
- Each step card fades in from the side (left cards from left, right cards from right) when it enters the viewport
- Duration: 600ms, easing: smooth ease-out
- Dots pulse briefly with a blue glow when their step enters view

### Bottom CTA
After the last step, centered:
- **Heading:** `"Let's Transform Your Idea Into Reality"`
- **Button:** `"BOOK A FREE CONSULTATION"` — Primary CTA gradient style
- Subtle blue glow behind the button

---

## 11 — FEATURED PROJECTS / PORTFOLIO SECTION

### Concept
Large, immersive project showcase cards. Each card is its own visual story with a hero mockup image, project details, and smart layout that alternates direction.

### Section Layout
- **Background:** White
- **Overline Badge:** `"OUR WORK"`
- **Headline:** `"Featured Projects"`
- **Sub-headline:** `"Discover how our technology-driven solutions empower businesses and turn ideas into real, impactful products."`

### Project Card Layout
- Each project is a full-width card: `max-w-7xl mx-auto`
- **Alternating layout:** Odd cards have image on right, text on left. Even cards swap.
- Desktop: Two-column `grid-cols-2`, Tablet: Stacked, Mobile: Stacked
- Gap between projects: `space-y-16`

### Each Project Card

**Structure:**
```
┌─────────────────────────────────────────────────────────┐
│  [Content Column]              │  [Image Column]         │
│                                │                         │
│  • LABEL: "Client Name"       │  ┌─────────────────┐   │
│  • TITLE: "Project Title"     │  │                   │   │
│  • DESCRIPTION: 2-3 lines     │  │   Phone/App       │   │
│  • BADGES: Industry + Tech    │  │   Mockup Image    │   │
│  • DELIVERABLES: Tag pills    │  │                   │   │
│  • CTA: "View Details →"      │  └─────────────────┘   │
│                                │                         │
└─────────────────────────────────────────────────────────┘
```

**Content Column:**
- Client label: `label` style, blue-500, uppercase
- Project title: `display-md`, slate-900
- Description: `body-md`, slate-500, 2-3 lines
- Industry badge: `bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs font-medium`
- Deliverables: Row of small pill tags `bg-slate-100 text-slate-600 rounded-full px-3 py-1 text-xs`
- CTA link: `"View Case Study →"` in blue-600, font-semibold, hover: underline + translate-x-1 on arrow

**Image Column:**
- Container: `glass-light rounded-3xl overflow-hidden p-4 md:p-8`
- Background: Unique soft gradient per project (e.g., `bg-gradient-to-br from-blue-50 to-cyan-50`)
- Phone mockup: Centered, with subtle shadow, `rounded-2xl overflow-hidden`
- Hover: Entire card lifts slightly `translate-y-[-4px]`, image scales `1.02`, transition 500ms

**Card wrapper:**
- `glass-light rounded-3xl overflow-hidden`
- Or use a clean white card: `bg-white rounded-3xl border border-slate-200/80 shadow-lg shadow-blue-500/[0.03]`
- Hover: `shadow-xl shadow-blue-500/[0.06] border-blue-200/40`

### Projects to Showcase (6 Projects)

1. **Atoon — Ultimate Music Discovery**
   - Industry: Social Networking / Music
   - Deliverables: UI/UX Design, Mobile App (iOS & Android), Marketing Website
   - Color accent: Blue-purple gradient background

2. **FinTrack — Smart Portfolio Manager**
   - Industry: FinTech / Investment
   - Deliverables: Full-Cycle Development, Backend, Admin Dashboard
   - Color accent: Blue-green gradient

3. **MediConnect — Telemedicine Platform**
   - Industry: HealthTech
   - Deliverables: Dual App (Doctor + Patient), Real-Time Video, E-Prescriptions
   - Color accent: Blue-teal gradient

4. **LocalRide — On-Demand Transport**
   - Industry: Transportation / Logistics
   - Deliverables: Dual App (Driver + Rider), Backend, Admin Panel
   - Color accent: Blue-sky gradient

5. **EduVerse — E-Learning Platform**
   - Industry: EdTech
   - Deliverables: Mobile App, Web Dashboard, LMS Integration
   - Color accent: Blue-indigo gradient

6. **ShopEase — Social Commerce**
   - Industry: E-Commerce / Social
   - Deliverables: Mobile App, Payment Integration, Seller Dashboard
   - Color accent: Blue-cyan gradient

### Animation
- Each project card enters with `fade-up` + subtle `scale(0.98) → scale(1)` on scroll
- Stagger between cards: 150ms
- Image has a slower parallax scroll effect (moves slightly slower than text)

---

## 12 — TESTIMONIALS SECTION

### Concept
A carousel/slider of client testimonials with profile photos, ratings, video feedback thumbnails, and quotes. Builds trust through real voices.

### Section Layout
- **Background:** `bg-slate-50/50` with subtle blue gradient overlay
- **Overline Badge:** `"TESTIMONIALS"`
- **Headline:** `"What Our Clients Say"`
- **Sub-headline:** `"Real stories from businesses we've helped build, launch, and grow."`

### Testimonial Card Carousel
- Horizontal scrolling carousel (Framer Motion or Embla Carousel)
- Shows 1 card on mobile, 2 on tablet, 3 on desktop
- Navigation: Left/Right arrow buttons + dot indicators
- Auto-advance every 6 seconds, pause on hover

### Each Testimonial Card

**Structure:**
```
┌────────────────────────────────────┐
│  ┌──┐                              │
│  │""│  Quote icon (blue-100)        │
│  └──┘                              │
│                                    │
│  "The testimonial quote text       │
│   goes here spanning 2-3 lines..." │
│                                    │
│  ★★★★★  4.9                       │
│                                    │
│  ┌──────┐                          │
│  │Avatar│  Name                    │
│  └──────┘  Title — Company         │
│                                    │
│  [Video Feedback Thumbnail]        │
│  ▶ Watch Video Review              │
└────────────────────────────────────┘
```

**Card styling:**
- `glass-light-enhanced rounded-2xl p-8`
- Border: `border border-blue-100/40`
- Quote icon: Large SVG quote mark in blue-100/blue-200, positioned top-right decoratively
- Quote text: `body-lg text-slate-700 italic font-normal leading-relaxed`
- Star rating: 5 star icons in `text-amber-400`, rating number in blue-600 bold
- Avatar: 48x48 rounded-full with blue ring `ring-2 ring-blue-200`
- Name: `heading-sm text-slate-900`
- Title + Company: `caption text-slate-500`
- Video thumbnail (optional): `rounded-xl overflow-hidden aspect-video` with play button overlay

### Testimonials Data

1. **Matthew West** — CEO, Bloom Journal (1M+ Followers)
   - ★★★★★ 5.0
   - "Outstanding product delivery. The team's dedication was unmatched. They delivered a world-class app that exceeded every expectation."

2. **Sarah Chen** — CTO, NexaFinance
   - ★★★★★ 4.9
   - "The Flutter expertise here is next-level. Our fintech app went from concept to 50K users in 3 months thanks to their rapid development cycle."

3. **James Rodriguez** — Founder, LocalRide
   - ★★★★★ 5.0
   - "They didn't just build our app — they became strategic partners. Every suggestion improved our product. Truly a top-tier Flutter agency."

4. **Priya Sharma** — Product Lead, EduVerse
   - ★★★★★ 4.8
   - "Seamless API integration, beautiful animations, flawless cross-platform performance. Working with this team was a game-changer for our edtech startup."

---

## 13 — PRICING SECTION

### Concept
Three-tier pricing cards — clean, scannable, with a highlighted "recommended" middle tier. Uses glass effects with the premium tier having an enhanced blue glow.

### Section Layout
- **Background:** White
- **Overline Badge:** `"PRICING"` — `bg-blue-50 text-blue-600 border border-blue-200/50`
- **Headline:** `"Choose Your Plan"`
- **Sub-headline:** `"Clear options to bring your app idea to life, with everything included to launch successfully."`
- **Tab switcher (optional):** `"New App Development"` | `"Existing App Maintenance"` — pills with blue-600 active state

### Pricing Grid
- `grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto`
- Cards equal height: `items-stretch`

### Card 1 — Frontend Development (Basic)

```
┌─────────────────────────────┐
│  Frontend Development        │
│  Basic App Package           │
│                              │
│  $799 /project               │
│  ─────────────────           │
│  ✓ Mobile app for your users │
│  ✓ Design to working app     │
│  ✓ API/service integration   │
│  ✓ Smooth animations         │
│  ✓ Support when you need it  │
│  ✓ 10-30 Day Delivery        │
│  ✓ Unlimited revisions       │
│                              │
│  [ Start Your Project ]      │
└─────────────────────────────┘
```

**Card styling:**
- `glass-light rounded-3xl p-8`
- Border: `border border-blue-100/40`
- Plan name: `heading-md text-slate-900`
- Subtitle: `body-sm text-slate-500`
- Price: `display-lg text-blue-600` + `body-sm text-slate-400` for suffix
- Divider: `border-b border-blue-100/50 my-6`
- Features: List with `text-blue-500` checkmark icons + `body-md text-slate-600`
- CTA: `w-full glass-light text-blue-600 border border-blue-200 rounded-full py-3 font-semibold hover:bg-blue-50`

### Card 2 — MVP Development (Recommended) ⭐

Same structure as Card 1, but:
- **Price:** `$2,499 /project`
- **ENHANCED styling:**
  - `glass-light-enhanced rounded-3xl p-8 ring-2 ring-blue-500 relative`
  - Top badge: `absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white rounded-full px-4 py-1 text-xs font-bold` reading `"RECOMMENDED"`
  - Shadow: `shadow-2xl shadow-blue-500/10`
  - Blue glow: `shadow-[0_0_60px_rgba(59,130,246,0.12)]`
- **CTA button:** Primary gradient style (filled blue, not outlined)
- Additional features: Admin dashboard, custom design, backend, store deployment, testing

### Card 3 — Full-Cycle Development (Premium)

Same structure, `$4,499 /project` with the most features:
- User app + business app + admin dashboard
- Premium brand design + backend + deployment + testing + admin panel + unlimited revisions
- CTA: Outlined style like Card 1

### Currency Detection (Dynamic)
```typescript
const [currency, setCurrency] = useState<"USD" | "INR">("USD");

useEffect(() => {
  async function detectCurrency() {
    try {
      const res = await fetch("/api/geo", { cache: "no-store" });
      const data = await res.json();
      setCurrency(data?.currency === "INR" ? "INR" : "USD");
    } catch {
      setCurrency(guessFromBrowser());
    }
  }
  detectCurrency();
}, []);

function guessFromBrowser(): "USD" | "INR" {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return /Kolkata/i.test(tz || "") ? "INR" : "USD";
}
```

### Hover States
- Non-featured cards: `hover:translate-y-[-4px] hover:shadow-xl hover:border-blue-200/60 transition-all duration-300`
- Featured card: `hover:shadow-[0_0_80px_rgba(59,130,246,0.15)] hover:ring-blue-400 transition-all duration-300`

---

## 14 — FAQ SECTION

### Concept
Expandable accordion FAQ section. Clean, simple, searchable.

### Section Layout
- **Background:** `bg-slate-50/50`
- **Overline Badge:** `"FAQ"`
- **Headline:** `"Frequently Asked Questions"`
- **Max width:** `max-w-3xl mx-auto` (narrower for readability)

### Accordion Component
Using `shadcn/ui Accordion` with custom styling:

```tsx
<Accordion type="single" collapsible className="space-y-4">
  {faqs.map((faq) => (
    <AccordionItem key={faq.id} value={faq.id} className="glass-light rounded-2xl border border-blue-100/40 px-6">
      <AccordionTrigger className="text-left heading-sm text-slate-900 hover:text-blue-600 py-5">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="body-md text-slate-500 pb-5">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

### Accordion Animation
```typescript
// tailwind.config.ts
keyframes: {
  'accordion-down': {
    from: { height: '0', opacity: '0' },
    to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
    to: { height: '0', opacity: '0' }
  }
},
animation: {
  'accordion-down': 'accordion-down 0.25s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out'
}
```

### Chevron Rotation
```css
[data-state="open"] .accordion-chevron {
  transform: rotate(180deg);
  transition: transform 300ms;
  color: #2563EB; /* turns blue when open */
}
```

### FAQ Questions

1. **How long does it take to build a Flutter app?**
   "Timelines vary based on complexity. A simple MVP typically takes 4-8 weeks, while full-cycle applications take 2-4 months. We provide detailed timelines during our initial discovery call."

2. **Do you provide the complete source code?**
   "Absolutely! You receive full ownership of the source code, design files, and all project assets upon completion. Your intellectual property remains 100% yours."

3. **What's included in the maintenance plan?**
   "Our maintenance includes bug fixes, OS compatibility updates, performance monitoring, security patches, and minor feature additions. We offer flexible monthly plans."

4. **Do you work with startups or only established companies?**
   "We work with both! From early-stage startups validating an MVP to established enterprises scaling their mobile presence. Our flexible packages are designed for every stage."

5. **What technologies do you use alongside Flutter?**
   "We pair Flutter with Firebase, Supabase, Node.js, or Python backends depending on your needs. For state management, we use Riverpod, BLoC, or GetX based on project requirements."

6. **Can you redesign and improve our existing Flutter app?**
   "Yes! We frequently take over and improve existing Flutter projects. We'll audit your codebase, identify improvements, and implement them with minimal disruption."

7. **How do you handle communication during the project?**
   "We maintain transparency through weekly video updates, a shared Slack/Discord channel, live Figma access, and a project dashboard where you can track every milestone."

---

## 15 — CONTACT / CTA SECTION

### Concept
A two-part section: a big bold CTA block followed by a contact information grid. This is the conversion point of the entire page.

### Part 1: Big CTA Block

**Layout:** Centered, full-width blue gradient container

```css
.cta-block {
  background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%);
  border-radius: 2rem;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
```

**Decorative elements:**
- Subtle grid pattern overlay at 5% opacity
- Floating abstract blue mesh/gradient blobs in background (CSS, not WebGL)
- Subtle animated dots or particles (CSS keyframes)

**Content:**
- Heading: `"Let's Build Something Amazing Together"` — `display-lg text-white font-extrabold`
- Sub-text: `"Ready to bring your app idea to life? Book a free consultation with our experts."` — `body-lg text-blue-100`
- CTA Button: `"BOOK FREE CONSULTATION"` — `bg-white text-blue-600 rounded-full px-10 py-4 font-bold text-lg shadow-xl shadow-white/20 hover:shadow-2xl hover:scale-[1.03] transition-all`
- The button has a white glow: `shadow-[0_0_40px_rgba(255,255,255,0.2)]`

**3-step strip below button:**
```
01: Share your app idea  →  02: Get a free assessment  →  03: Receive a tailored plan
```
Each step: `text-blue-100/80 body-sm font-medium`

### Part 2: Contact Information Grid

**Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16`

**Contact Cards (Each as a glass card):**

1. **WhatsApp:**
   - Icon: WhatsApp icon in green
   - Number: `+91 XXXXXXXXXX`
   - `glass-light rounded-2xl p-6 text-center hover:border-blue-200/60`

2. **Phone:**
   - Icon: Phone icon in blue
   - Number: `+91 XXXXXXXXXX`

3. **Email:**
   - Icon: Mail icon in blue
   - Address: `hello@youragency.com`

4. **Location:**
   - Icon: Map pin icon in blue
   - Text: `"Working remotely worldwide"`

---

## 16 — FOOTER

### Layout
A comprehensive footer with multiple sections.

### Structure

```
┌─────────────────────────────────────────────────────────┐
│                     Thin blue line                        │
├──────────┬──────────┬──────────┬─────────────────────────┤
│  Brand   │ Product  │ Services │ Contact Info             │
│  Column  │ Links    │ Links    │                          │
│          │          │          │                          │
│  Logo    │ Home     │ Flutter  │ Phone: +91...            │
│  +       │ Why Us   │ UI/UX   │ Email: hello@            │
│  Desc    │ Services │ Backend  │ Location: Remote         │
│          │ Projects │ Maintain │                          │
│          │ Pricing  │ Store    │ Social Icons:            │
│          │ Contact  │          │ LinkedIn Twitter IG      │
├──────────┴──────────┴──────────┴─────────────────────────┤
│  © 2026 AgencyName. All Rights Reserved.    Terms | Privacy │
└─────────────────────────────────────────────────────────┘
```

### Styling
- **Background:** `bg-slate-900` (dark footer for contrast) OR `bg-white` with top border
  - **Recommended:** Dark footer for visual anchor → `bg-slate-900 text-white`
- **Top border:** `border-t border-blue-500/20`
- **Padding:** `py-16 px-6 md:px-8`
- **Max width:** `max-w-7xl mx-auto`

### Brand Column
- Logo: Agency icon + name in white/blue
- Description: `"Crafting exceptional mobile experiences with Flutter. We transform your ideas into elegant, high-performance applications."` — `text-slate-400 body-sm`

### Link Columns
- Column headers: `heading-sm text-white mb-4` (if dark footer) or `heading-sm text-slate-900 mb-4`
- Links: `text-slate-400 body-sm hover:text-blue-400 transition-colors`

### Social Icons
- Icon buttons: `w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all`
- Icons: LinkedIn, Twitter/X, Instagram, GitHub
- Icon color: `text-slate-400 hover:text-white`

### Bottom Bar
- `border-t border-slate-800 mt-12 pt-6` (if dark footer)
- Left: `"© 2026 [Agency Name]. All Rights Reserved."` — `text-slate-500 caption`
- Right: `"Terms & Conditions"` | `"Privacy Policy"` — `text-slate-500 caption hover:text-blue-400`

---

## 17 — ANIMATION CATALOG

### ANIM-001: Viewport Entry — Fade Up
**Usage:** Cards, sections, headings entering viewport
**Library:** Framer Motion

```tsx
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Usage with stagger
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};
```

### ANIM-002: Viewport Entry — Fade In Scale
**Usage:** Hero badge, stats, featured elements

```tsx
const fadeScaleVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};
```

### ANIM-003: Viewport Entry — Slide From Side
**Usage:** Timeline cards, alternating project cards

```tsx
const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};
```

### ANIM-004: Marquee Scroll (CSS)
```css
@keyframes scroll-right {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-33.333%); }
}
@keyframes scroll-left {
  0%   { transform: translateX(-33.333%); }
  100% { transform: translateX(0%); }
}
.marquee-right { animation: scroll-right 45s linear infinite; }
.marquee-left  { animation: scroll-left 45s linear infinite; }
```

### ANIM-005: Accordion Expand/Collapse
```typescript
keyframes: {
  'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
  'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } }
},
animation: {
  'accordion-down': 'accordion-down 0.25s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out'
}
```

### ANIM-006: Sheet Slide In/Out (Mobile Nav)
```typescript
// Enter: slide-in-from-right, 500ms
"data-[state=open]:animate-in data-[state=open]:slide-in-from-right"
"data-[state=open]:duration-500"

// Exit: slide-out-to-right, 300ms
"data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right"
"data-[state=closed]:duration-300"
```

### ANIM-007: Counter Count-Up
**Usage:** Stats section numbers

```tsx
function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const start = Date.now();
        const step = () => {
          const progress = Math.min((Date.now() - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}
```

### ANIM-008: Timeline Line Draw
**Usage:** How It Works section

```tsx
const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start center", "end center"]
});

const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

<motion.div
  style={{ height: lineHeight }}
  className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 origin-top"
/>
```

### ANIM-009: Hero Headline Stagger
```tsx
const headlineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const lineVariant = {
  hidden: { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
};
```

### ANIM-010: Dot Pulse (Timeline)
```css
@keyframes pulse-blue {
  0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(59, 130, 246, 0); }
}
.dot-pulse { animation: pulse-blue 2s ease-out infinite; }
```

---

## 18 — HOVER STATE CATALOG

### HOVER-001: Navigation Links
```css
/* Default */   text-slate-600 font-medium
/* Hover */     text-blue-600 transition-colors duration-200
```

### HOVER-002: Primary CTA Button
```css
/* Default */   bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20
/* Hover */     shadow-xl shadow-blue-500/30 scale-[1.03] brightness-110 transition-all duration-200
```

### HOVER-003: Secondary/Glass Button
```css
/* Default */   glass-light text-slate-700 border-blue-200/50
/* Hover */     bg-blue-50 border-blue-300/50 text-blue-700 transition-all duration-200
```

### HOVER-004: Service Dropdown Items
```css
/* Default */   bg-transparent
/* Hover */     bg-blue-50 rounded-xl ring-1 ring-blue-200/60 shadow-[0_0_20px_rgba(59,130,246,0.08)]
```

### HOVER-005: Glass Cards (Service, Project, Pricing)
```css
/* Default */   translate-y-0 shadow-lg shadow-blue-500/[0.03] border-blue-100/40
/* Hover */     translate-y-[-4px] shadow-xl shadow-blue-500/[0.06] border-blue-200/60 transition-all duration-300
```

### HOVER-006: Logo Marquee Cards
```css
/* Default */   glass-light, logo in grayscale
/* Hover */     filter-none (full color), scale-[1.05], border-blue-200/60 transition-all duration-300
```

### HOVER-007: Footer Links
```css
/* Default */   text-slate-400
/* Hover */     text-blue-400 transition-colors duration-200
```

### HOVER-008: Social Icon Buttons
```css
/* Default */   bg-slate-800 text-slate-400
/* Hover */     bg-blue-600 text-white scale-[1.1] transition-all duration-200
```

### HOVER-009: FAQ Accordion Trigger
```css
/* Default */   text-slate-900
/* Hover */     text-blue-600 transition-colors duration-200
```

### HOVER-010: Project CTA Link
```css
/* Default */   text-blue-600 inline-flex items-center gap-1
/* Hover */     text-blue-700 underline, arrow → translates right 4px, transition-all duration-200
```

### HOVER-011: Phone Mockup Cards (Hero)
```css
/* Default */   translate-y-0 shadow-xl shadow-blue-500/5
/* Hover */     translate-y-[-6px] shadow-2xl shadow-blue-500/10 border-blue-200/60 transition-all duration-400
```

---

## 19 — SCROLL-BASED BEHAVIORS

### SCROLL-001: Sticky Navigation
```tsx
<header className="sticky top-0 z-50 p-4">
  <nav className="glass-nav rounded-full max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
    ...
  </nav>
</header>
```

### SCROLL-002: Fixed Ambient Background
```tsx
<div className="fixed inset-0 z-0 bg-white">
  <AmbientMesh />
</div>
<main className="relative z-10">
  {/* All page content */}
</main>
```

### SCROLL-003: Intersection Observer — Fade In on Scroll
Every major section and card uses `IntersectionObserver` or Framer Motion's `whileInView`:
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeUpVariant}
>
  {content}
</motion.div>
```

### SCROLL-004: Lazy Video Loading
```typescript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting && !loaded) {
        videoEl.src = src;
        videoEl.load();
        await videoEl.play();
        setLoaded(true);
      } else if (!entry.isIntersecting && loaded) {
        videoEl.pause();
      } else if (entry.isIntersecting && loaded) {
        await videoEl.play();
      }
    });
  },
  { rootMargin: "80px", threshold: 0.15 }
);
```

### SCROLL-005: Marquee Edge Mask
```tsx
<div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
```

### SCROLL-006: Timeline Line Scroll-Draw
Uses Framer Motion `useScroll` + `useTransform` to animate line height proportional to scroll position through the timeline section.

### SCROLL-007: Smooth Scroll for Anchor Links
```tsx
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};
```

---

## 20 — MICRO-INTERACTIONS

| ID | Element | Interaction | Value | Transition |
|----|---------|-------------|-------|------------|
| MI-001 | CTA Buttons | Scale on hover | `scale(1.03)` | `transition-all 200ms` |
| MI-002 | Nav links | Color shift | slate-600 → blue-600 | `transition-colors 200ms` |
| MI-003 | Dropdown chevron | Rotate on open | `rotate(180deg)` | `duration-300` |
| MI-004 | Collapsible chevron (mobile) | Rotate on open | `rotate(180deg)` | `transition-transform 300ms` |
| MI-005 | Marquee rows | Pause on hover | `animationPlayState: paused` | Instant |
| MI-006 | Glass cards | Lift on hover | `translateY(-4px)` | `transition-all 300ms` |
| MI-007 | Logo cards | Grayscale to color | `grayscale(0)` | `transition-all 300ms` |
| MI-008 | Project arrows | Slide right on hover | `translateX(4px)` | `transition-transform 200ms` |
| MI-009 | Social icons | Scale on hover | `scale(1.1)` | `transition-all 200ms` |
| MI-010 | Stats numbers | Count up on view | 0 → target | 2000ms ease-out |
| MI-011 | Focus rings | Show on keyboard nav | `ring-2 ring-blue-500/50 ring-offset-2` | Instant |
| MI-012 | Button press | Scale down on active | `scale(0.98)` | Instant |
| MI-013 | Testimonial carousel | Auto-advance | Next slide every 6s | 400ms ease |

---

## 21 — WEBGL AMBIENT SHADER

### Library
**OGL** (`ogl@1.0.11`) — Lightweight WebGL library

### Shader Concept
A soft, ethereal mesh gradient that produces gentle blue caustic-like patterns on a white background. Think: light refracting through water onto a white surface.

### Vertex Shader
```glsl
#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
```

### Fragment Shader (Conceptual)
```glsl
#version 300 es
precision highp float;

uniform float iTime;
uniform vec2 iResolution;
uniform float uSpeed;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
uniform vec3 uColor1; // #DBEAFE → vec3(0.859, 0.918, 0.996)
uniform vec3 uColor2; // #93C5FD → vec3(0.576, 0.773, 0.992)
uniform vec3 uColor3; // #C7D2FE → vec3(0.780, 0.824, 0.996)

out vec4 fragColor;

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  float t = iTime * uSpeed;
  
  // Multi-layered sine wave noise for organic motion
  float n1 = sin(uv.x * 3.0 + t * 0.5) * cos(uv.y * 2.5 + t * 0.3);
  float n2 = sin(uv.x * 1.5 - t * 0.4 + 1.0) * cos(uv.y * 3.0 + t * 0.6);
  float n3 = sin((uv.x + uv.y) * 2.0 + t * 0.2) * 0.5;
  
  // Mouse warping (subtle)
  vec2 mouseNorm = uMouse / iResolution;
  float mouseDist = length(uv - mouseNorm);
  float mouseEffect = smoothstep(0.4, 0.0, mouseDist) * uMouseInteractive * 0.05;
  n1 += mouseEffect;
  
  // Blend colors
  float blend = (n1 + n2 + n3) * 0.33 + 0.5;
  vec3 color = mix(uColor1, uColor2, smoothstep(0.3, 0.7, blend));
  color = mix(color, uColor3, smoothstep(0.5, 0.9, n3 + 0.5));
  
  // White base with colored overlay
  vec3 finalColor = mix(vec3(1.0), color, uOpacity);
  
  fragColor = vec4(finalColor, 1.0);
}
```

### Uniforms Table

| Uniform | Type | Default | Description |
|---------|------|---------|-------------|
| `iTime` | float | 0 | Animation time (seconds) |
| `iResolution` | vec2 | viewport | Canvas dimensions |
| `uSpeed` | float | 0.6 | Animation speed multiplier |
| `uOpacity` | float | 0.20 | Color intensity (0 = pure white) |
| `uMouse` | vec2 | [0,0] | Mouse position in pixels |
| `uMouseInteractive` | float | 1.0 | Enable/disable mouse effect |
| `uColor1` | vec3 | [0.859,0.918,0.996] | Primary blue (DBEAFE) |
| `uColor2` | vec3 | [0.576,0.773,0.992] | Secondary blue (93C5FD) |
| `uColor3` | vec3 | [0.780,0.824,0.996] | Tertiary blue (C7D2FE) |

### Performance
- Mobile: DPR capped at 0.5, speed 0.3x, mouse disabled
- Desktop: DPR up to 2, speed 0.6x, mouse enabled
- FPS: ~30fps desktop, ~20fps mobile
- Tab hidden: pause animation frame loop
- Reduced motion: show static gradient fallback

---

## 22 — RESPONSIVE BEHAVIOR

### Breakpoints (Tailwind defaults)

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | ≥640px | Large phones, small tablets |
| `md` | ≥768px | Tablets |
| `lg` | ≥1024px | Small desktops, laptops |
| `xl` | ≥1280px | Desktops |
| `2xl` | ≥1536px | Large desktops |

### Mobile (0–639px)
- **Navigation:** Hamburger menu only, no desktop links
- **Hero:** Single column, text centered, 1-2 phone cards, buttons stacked vertically
- **Services:** Single column cards
- **Stats:** 2x2 grid
- **Process:** Stacked vertically, no timeline line
- **Projects:** Single column, image above content
- **Testimonials:** Single card visible, swipe carousel
- **Pricing:** Single column, recommended card first
- **FAQ:** Full width
- **Footer:** Stacked columns
- **Typography:** Smallest scale values
- **Padding:** `px-4 py-12` for sections
- **WebGL:** Reduced quality, no mouse interaction

### Tablet (640–1023px)
- **Navigation:** Desktop links start appearing at 768px
- **Hero:** 3 phone cards, buttons side by side
- **Services:** 2-column grid
- **Stats:** Horizontal row
- **Process:** Timeline on one side
- **Projects:** Stacked but larger
- **Testimonials:** 2 cards visible
- **Pricing:** Can start showing 3 columns at 768px
- **Typography:** Mid-scale values

### Desktop (1024px+)
- **Navigation:** Full desktop layout with all links + CTA button
- **Hero:** Full 4-5 phone card grid
- **Services:** 3-column grid
- **Stats:** Horizontal row with extra spacing
- **Process:** Alternating left-right timeline
- **Projects:** Two-column alternating layout
- **Testimonials:** 3 cards visible
- **Pricing:** 3-column grid with featured center card
- **Typography:** Full-scale values
- **Max content width:** `max-w-7xl mx-auto` (1280px)

### iOS Safari Fixes
```css
@supports (-webkit-touch-callout: none) {
  html { height: -webkit-fill-available; }
  body {
    min-height: -webkit-fill-available;
    position: fixed;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }
}
```

---

## 23 — PERFORMANCE OPTIMIZATION

### Image Optimization
```tsx
<Image
  src="/images/project-1.png"
  width={600}
  height={400}
  alt="Project screenshot"
  className="object-cover"
  sizes="(min-width: 1024px) 50vw, 100vw"
  priority={isAboveFold}
  quality={75}
/>
```

### Video Optimization
1. Lazy loading via IntersectionObserver
2. `preload="none"` until visible
3. Auto-pause when out of viewport or tab hidden
4. Respects `prefers-reduced-motion` and `saveData`

### Script Loading Strategy
```tsx
<Script id="structured-data" strategy="afterInteractive" type="application/ld+json">
<Script src="/analytics.js" strategy="lazyOnload" />
```

### Static Generation
```typescript
export const dynamic = "force-static";
```

### Font Optimization
```tsx
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
```

### Bundle Splitting
- Dynamic import for heavy components:
```tsx
const AmbientMesh = dynamic(() => import("@/components/AmbientMesh"), { ssr: false });
const TestimonialCarousel = dynamic(() => import("@/components/TestimonialCarousel"));
```

### Core Web Vitals Targets
| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| INP | < 200ms |

---

## 24 — ACCESSIBILITY FEATURES

### Reduced Motion
```typescript
const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

if (prefersReducedMotion) {
  // Skip WebGL animation → static gradient
  // Skip video autoplay
  // Disable Framer Motion animations (set duration to 0)
  // Keep marquee static
}
```

### Screen Reader Labels
```tsx
<button aria-label="Open navigation menu"><MenuIcon /></button>
<button aria-label="Close navigation menu"><XIcon /></button>
<a aria-label="Book a free consultation">{ctaText}</a>
<a aria-label="Follow us on LinkedIn" href="...">{linkedinIcon}</a>
```

### Focus Visible
```css
/* All interactive elements */
focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:outline-none
```

### Semantic HTML
- `<header>` for navigation
- `<main>` for primary content
- `<section>` with `aria-label` for each major section
- `<footer>` for footer
- `<nav>` for navigation menus
- Proper heading hierarchy: one `<h1>` in hero, `<h2>` for section heads, `<h3>` for card titles

### Touch Targets
- All buttons/links: minimum 44×44px touch area
- Mobile nav links: generous `py-3` padding

### Color Contrast
- All text passes WCAG 2.1 AA contrast ratios
- slate-600 on white: 5.74:1 ✓
- blue-600 on white: 4.68:1 ✓ (AA for large text)
- White on blue-600: 4.68:1 ✓ (AA for large text)

### Keyboard Navigation
- Tab through all interactive elements in logical order
- Dropdown opens on Enter/Space, closes on Escape
- Sheet closes on Escape
- Carousel navigable with arrow keys

---

## 25 — STATE MANAGEMENT PATTERNS

### Pattern 1: Mobile Menu State
```typescript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

### Pattern 2: Active Section (Scroll Spy)
```typescript
const [activeSection, setActiveSection] = useState("hero");

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { rootMargin: "-50% 0px", threshold: 0 }
  );
  
  document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);
```

### Pattern 3: Marquee Pause
```typescript
const [pausedRow, setPausedRow] = useState<string | null>(null);
```

### Pattern 4: Currency Detection (Pricing)
```typescript
const [currency, setCurrency] = useState<"USD" | "INR">("USD");

useEffect(() => {
  async function load() {
    try {
      const res = await fetch("/api/geo", { cache: "no-store" });
      const { currency } = await res.json();
      setCurrency(currency === "INR" ? "INR" : "USD");
    } catch {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setCurrency(/Kolkata/i.test(tz || "") ? "INR" : "USD");
    }
  }
  load();
}, []);
```

### Pattern 5: Pricing Tab
```typescript
const [pricingTab, setPricingTab] = useState<"new" | "maintenance">("new");
```

### Pattern 6: Testimonial Carousel
```typescript
const [activeTestimonial, setActiveTestimonial] = useState(0);
const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return;
  const interval = setInterval(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, 6000);
  return () => clearInterval(interval);
}, [isPaused]);
```

---

## 26 — SEO & META

### Page Meta
```tsx
export const metadata: Metadata = {
  title: "[Agency Name] — Premium Flutter Development Agency",
  description: "We build high-performance Flutter apps for startups and enterprises. From MVP to full-cycle development — ship faster, launch sooner, grow smarter.",
  keywords: ["Flutter development", "Flutter agency", "mobile app development", "cross-platform apps", "Flutter developer", "app development company"],
  authors: [{ name: "[Agency Name]" }],
  openGraph: {
    type: "website",
    title: "[Agency Name] — Premium Flutter Development Agency",
    description: "We build high-performance Flutter apps that ship fast.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "[Agency Name] — Premium Flutter Development Agency",
    description: "Flutter apps that ship fast.",
    images: ["/og-image.png"],
  },
};
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[Agency Name]",
  "description": "Premium Flutter Development Agency",
  "url": "https://www.youragency.com",
  "serviceType": ["Mobile App Development", "Flutter Development", "UI/UX Design"],
  "areaServed": "Worldwide",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50"
  }
}
```

### Dynamic Favicon
```javascript
function updateFavicon() {
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const href = dark ? '/icons/logo-white.svg' : '/icons/logo-blue.svg';
  let link = document.querySelector("link[rel~='icon']");
  if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
  link.href = href;
}
updateFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
```

---

## 27 — FILE & COMPONENT STRUCTURE

```
src/
├── app/
│   ├── layout.tsx                    # Root layout with font, metadata, analytics
│   ├── page.tsx                      # Home page (assembles all sections)
│   ├── globals.css                   # Global styles, glass classes, animations
│   └── api/
│       └── geo/
│           └── route.ts              # Geo-location API for currency detection
│
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx            # Sticky pill navigation
│   │   ├── MobileMenu.tsx            # Sheet slide-out mobile menu
│   │   ├── Footer.tsx                # Multi-column footer
│   │   └── SectionWrapper.tsx        # Reusable section container with scroll animation
│   │
│   ├── sections/
│   │   ├── Hero.tsx                  # Hero section with headline + phone grid
│   │   ├── TrustedBy.tsx             # Logo marquee section
│   │   ├── Services.tsx              # Service cards grid
│   │   ├── WhyUs.tsx                 # Stats + value props
│   │   ├── HowItWorks.tsx            # Timeline process section
│   │   ├── Projects.tsx              # Featured projects showcase
│   │   ├── Testimonials.tsx          # Testimonial carousel
│   │   ├── Pricing.tsx               # Pricing cards
│   │   ├── FAQ.tsx                   # Accordion FAQ
│   │   └── ContactCTA.tsx            # Contact section with big CTA
│   │
│   ├── ui/                           # shadcn/ui components
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── sheet.tsx
│   │   └── ...
│   │
│   ├── effects/
│   │   ├── AmbientMesh.tsx           # WebGL ambient background (OGL)
│   │   ├── LazyVideo.tsx             # Intersection Observer video loader
│   │   ├── CountUp.tsx               # Animated number counter
│   │   └── ScrollReveal.tsx          # Framer Motion scroll reveal wrapper
│   │
│   └── shared/
│       ├── Badge.tsx                 # Overline badge component
│       ├── GlassCard.tsx             # Reusable glass card
│       ├── PhoneMockup.tsx           # Phone-shaped card
│       ├── Logo.tsx                  # Agency logo
│       └── SocialIcons.tsx           # Social media icon links
│
├── lib/
│   ├── constants.ts                  # Colors, animation values, content data
│   ├── utils.ts                      # Utility functions (cn, currency, etc.)
│   └── fonts.ts                      # Font configuration
│
├── data/
│   ├── services.ts                   # Services content
│   ├── projects.ts                   # Project portfolio data
│   ├── testimonials.ts               # Testimonial data
│   ├── pricing.ts                    # Pricing plans data
│   └── faq.ts                        # FAQ content
│
└── public/
    ├── fonts/
    │   └── Inter.woff2
    ├── icons/
    │   ├── logo-blue.svg
    │   └── logo-white.svg
    ├── images/
    │   ├── projects/                 # Project screenshots
    │   ├── testimonials/             # Testimonial avatars
    │   ├── logos/                    # Client logos
    │   └── services/                 # Service illustrations
    ├── videos/                       # Hero phone card videos
    └── og-image.png
```

---

## SUMMARY

This is a **single-page marketing website** for a premium Flutter development agency. The core experience is defined by:

1. A **subtle animated blue mesh gradient** background that makes the page feel alive without overwhelming the clean white aesthetic
2. Content presented in **light frosted glass cards** that float above the ambient background
3. A **sticky pill-shaped navigation** bar with glass effect and smooth dropdown
4. A **powerful hero section** with large staggered-animated typography, gradient text, phone mockup grid, and strong CTAs
5. **Trust-building sections** — logo marquee, stats with count-up animations, client testimonials with video reviews
6. **Clear service showcase** with animated illustrations and hover-lift cards
7. **Visual process timeline** with scroll-driven line draw animation
8. **Immersive project portfolio** with alternating large cards and real screenshots
9. **Transparent pricing** with three tiers, dynamic currency, and a featured "recommended" card
10. **Conversion-optimized contact section** — full-width blue gradient CTA block
11. **Butter-smooth animations** throughout via Framer Motion — staggered fade-ups, scroll reveals, micro-interactions

### The overall feeling should be:

> **Clean. Professional. Trustworthy. Technically Excellent. Subtly Alive.**

The white + blue palette conveys trust and competence (like a well-designed SaaS product), while the glass effects, ambient background, and premium animations create a sense of depth and sophistication that sets this agency apart from every other Flutter shop on the internet.

---

*END OF SPECIFICATION*
