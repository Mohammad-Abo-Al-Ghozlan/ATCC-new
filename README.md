# ATCC Portfolio (React/Next.js)

This is the modernized portfolio for Afkar Al-TatWeer Contracting Co. (ATCC), rebuilt using React and Next.js. It replaces the old static HTML site and features:

- **Featured Projects**: Interactive cards and galleries, auto-grouped by project folders, using original images from `/public/assets/`.
- **Hero Section**: Video background (`bg-home-en+ar.MOV`) for a dynamic first impression.
- **Partners**: Real contributor logos from `/public/assets/contributes/`.
- **Responsive Design**: Mobile-first, with smooth transitions and accessibility.
- **No new assets**: All images and videos reused from the original portfolio.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run locally**:
   ```bash
   npm run dev
   ```
3. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure
- `app/` — Main app entry and layout
- `components/` — UI components (navbar, hero, projects, partners, etc.)
- `lib/project-data.ts` — Project gallery data, auto-grouped by folder
- `public/assets/` — All images and videos (original, not duplicated)

## Deployment
This repo is ready for deployment on Vercel or any platform supporting Next.js.

## License
Copyright © 2026 Afkar Al-TatWeer Contracting Co. All rights reserved.
