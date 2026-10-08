# 🏎️ CarVerse — Luxury & Performance Automotive Showcase

<div align="center">

[![Live Demo](https://img.shields.io/badge/Demo-carverse--delta.vercel.app-f97316?style=for-the-badge&logo=vercel&logoColor=white)](https://carverse-delta.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)


<br />

**A state-of-the-art, responsive web application for exploring luxury, sport, and electric vehicles.**  
Engineered with Next.js 16 (App Router), React 19, Tailwind CSS, and Framer Motion for a fluid, high-octane user experience.

[**Explore Live Demo »**](https://carverse-delta.vercel.app/) 
</div>

---


## 🌟 Overview

**CarVerse** is an ultra-modern digital showroom created for automotive enthusiasts, exotic car dealerships, and collectors. Designed with a luxury aesthetic, glassmorphism accents, and precision micro-animations, CarVerse allows users to browse an exclusive vehicle fleet, dynamically filter machines based on attributes, inspect detailed powertrain and mechanical specifications, and connect directly with VIP concierge services.

### ✨ Highlights
- **Lightning Fast**: Built on the Next.js 16 App Router with React 19 compiler optimizations.
- **Dynamic Theming**: Seamless Light & Dark mode support with persistent state stored in `localStorage` and automatic system preference detection.
- **Responsive & Accessible**: Optimized for all form factors — from mobile viewports to ultra-wide displays.
- **Polished Animations**: Smooth layout transitions, physics-based modal dialogs, and interactive hover states powered by Framer Motion.

---

## 🚀 Key Features

| Feature | Description |
| :--- | :--- |
| **🏎️ Curated Fleet Showcase** | Interactive grid presenting exotic supercars, luxury grand tourers, SUVs, and high-performance EVs with badges and pricing. |
| **🔍 Multi-Attribute Filtering** | Filter inventory in real time by **Vehicle Type** (SUV, Sedan, Sports, Luxury), **Brand** (Audi, BMW, Ford, Mercedes, Porsche, Tesla, etc.), and **Price Range**. |
| **⚡ Instant Keyword Search** | Live name & manufacturer search with one-click clear button and instant filter resets. |
| **📋 Detailed Specification Modal** | Comprehensive inspection modal featuring engine type, mileage/range, fuel type, transmission, model year, and direct booking actions. |
| **🌓 Dynamic Dark / Light Mode** | Custom theme provider supporting instant switching, system theme synchronization, and glassmorphic navigation styles. |
| **⏳ Bespoke Splash Loader** | Engaging startup loader featuring animated branding, spinner rings, and progress indicators for a luxury feel. |
| **🏢 Dealership & Services** | Dedicated sections for dealership certification (200-point inspection), leasing, worldwide logistics, VIP concierge, performance tuning, and valuation. |
| **📬 Interactive Concierge Desk** | Simulated test drive booking and VIP dispatch inquiry form with validation and instant status feedback. |

---

## 🛠️ Tech Stack

### Core Framework & Runtime
- **[Next.js 16](https://nextjs.org/)** — App Router architecture, optimized font loading, and server-ready rendering.
- **[React 19](https://react.dev/)** — Latest React features with experimental React Compiler integration.

### Styling & Design System
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling with custom orange/amber luxury accent palettes.
- **Glassmorphism & Gradients** — Custom glass blur effects, subtle drop-shadows, and dark-mode backdrop filters.
- **[Google Fonts](https://fonts.google.com/)** — **Outfit** for clean modern typography and **Playfair Display** for high-end serif accents.

### Motion & Interactions
- **[Framer Motion](https://www.framer.com/motion/)** — Complex spring physics, scroll-triggered reveals, and exit animations (`AnimatePresence`).

### Icons & Assets
- **[Lucide React](https://lucide.dev/)** & **[React Icons](https://react-icons.github.io/react-icons/)** — Consistent icon sets across specs, badges, and controls.

---

## 📂 Project Architecture

```plaintext
carverse/
├── public/                     # Static media & public assets
│   ├── images/
│   │   └── hero.png            # High-resolution hero vehicle artwork
│   ├── favicon.ico
│   └── *.svg                   # System vector icons
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── globals.css         # Base Tailwind directives & theme variables
│   │   ├── layout.js           # Root layout (Google fonts & ThemeProvider)
│   │   └── page.js             # Landing page orchestrator & initial loading state
│   ├── components/             # Reusable UI component library
│   │   ├── About.jsx           # Dealership heritage, milestones & inspection highlights
│   │   ├── CarCard.jsx         # Vehicle showcase card with hover elevations
│   │   ├── CarListing.jsx      # Inventory grid, filter toolbar & search logic
│   │   ├── CarModal.jsx        # Detailed specs modal with AnimatePresence
│   │   ├── Contact.jsx         # VIP concierge cards & dispatch inquiry form
│   │   ├── Footer.jsx          # Showroom directory, links & newsletter
│   │   ├── Hero.jsx            # Impactful hero section with CTAs & quick stats
│   │   ├── Loading.jsx         # Premium loading splash animation
│   │   ├── Navbar.jsx          # Sticky glassmorphic navbar with mobile menu
│   │   ├── Services.jsx        # Specialized automotive services grid
│   │   └── ThemeProvider.jsx   # Context provider for Dark / Light mode switching
│   └── data/
│       └── cars.js             # Structured dataset of vehicle specifications
├── eslint.config.mjs           # ESLint configuration
├── jsconfig.json               # Absolute import aliases (@/*)
├── next.config.mjs             # Next.js compilation settings
├── package.json                # Project dependencies & scripts
├── postcss.config.js           # PostCSS configuration
└── tailwind.config.js          # Tailwind theme extensions (colors, fonts, keyframes)
```

---

## ⚡ Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm` (bundled with Node), `yarn`, or `pnpm`
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rika4698/CarVerse.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd CarVerse
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page supports Fast Refresh and updates automatically on code changes.

### Production Build

To test the optimized production build locally:
```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Code Quality & Linting

Run ESLint to check for syntax and style issues:
```bash
npm run lint
```

---

## 🚘 Data Model & Customization

All showcase vehicles are defined in [`src/data/cars.js`](./src/data/cars.js). To add a new car to the showroom, append an entry following this schema:

```javascript
{
  id: 11,
  name: "Porsche Taycan Turbo S",
  brand: "Porsche",
  price: 187000,
  type: "Sports",               // "SUV" | "Sedan" | "Sports" | "Luxury"
  featured: true,
  image: "https://your-image-url.com/car.jpg",
  description: "Pure electric performance sports car engineered for instantaneous acceleration.",
  features: {
    mileage: "246 Mi Range",
    engine: "Dual Permanent Magnet Electric",
    transmission: "2-Speed Rear / 1-Speed Front",
    fuel: "Electric",
    year: 2025
  }
}
```

The search inputs, brand dropdowns, and category buttons will automatically adapt to any new brands or categories introduced into this file!

---

## 🎨 Design System & UI Components

The application follows an intentional luxury design language:

- **Primary Hue**: `#f97316` (Vibrant Tangerine / Orange) representing speed, energy, and luxury performance.
- **Dark Palette**: Deep slate `#0f172a` and midnight `#020617` backgrounds with high-contrast typography.
- **Glassmorphism**: Backdrop blur filters (`backdrop-blur-xl`) paired with semi-transparent surfaces (`bg-white/80`, `bg-slate-900/90`).
- **Typography Pairing**:
  - Headings & Subtitles: `Outfit` (Geometric, clean, modern)
  - Luxury Accents & Italic Highlights: `Playfair Display` (Classic editorial serif)

---

## 🌐 Deployment

CarVerse is pre-configured for one-click deployment on **[Vercel](https://vercel.com/)**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRika4698%2FCarVerse)

1. Push your repository to GitHub / GitLab.
2. Import the project into [Vercel](https://vercel.com/).
3. Vercel automatically detects Next.js configuration and assigns default build settings (`next build`).
4. Click **Deploy**.

---

## 👥 Author & Acknowledgments

- **Creator**: [Rika4698](https://github.com/Rika4698)
- **Live Deployment**: [CarVerse on Vercel](https://carverse-delta.vercel.app/)
- **Inspirations**: Luxury automotive manufacturers & modern bespoke digital showrooms.

---

<div align="center">
  <sub>Built with ❤️ for automotive lovers worldwide.</sub>
</div>