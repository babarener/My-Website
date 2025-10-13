# 🌐 Personal Website — Xinyu (Frank) Bo

This repository contains the source code for my **personal portfolio website**, built with **Next.js 15**, **React**, and **Tailwind CSS**. It showcases my background, projects, and interests through a modern and responsive design.

> Deployed on **Vercel** with automatic builds on push to `main`.

---

## 🚀 Getting Started

To run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open **http://localhost:3000** in your browser. The site hot-reloads as you edit files.  
Main entry: `app/page.tsx`.

---

## 🧠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI:** React + Tailwind CSS (dark mode supported)
- **Animation:** Framer Motion
- **Fonts:** `next/font` (Geist)
- **Hosting:** Vercel

---

## ✨ Features

- Responsive, minimalist layout for all devices
- Light/dark theme toggle
- Smooth section animations
- Modular component structure (`/components`, `/sections`)
- CI/CD with Vercel (preview deployments on PRs)

---

## 🧩 Project Structure

```
/
├── app/
│   ├── layout.tsx        # Root layout & metadata
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/           # Reusable UI components
├── sections/             # About, Projects, Personal Life, etc.
├── public/               # Static assets (images, icons, videos)
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 📦 Scripts

- `dev` — start local development server
- `build` — production build
- `start` — start production server
- `lint` — run ESLint

---

## 🚀 Deployment

The easiest way to deploy is via **Vercel**:

1. Click “Import Project” on Vercel and select this repo.  
2. Use defaults for a Next.js app; no extra config needed.  
3. Every push to `main` will trigger an automatic build and deployment.

---

## 📘 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js on GitHub](https://github.com/vercel/next.js)

---

## 👤 Author

**Xinyu (Frank) Bo** — Waterloo, ON  
[LinkedIn](https://linkedin.com/in/xinyubo) • [GitHub](https://github.com/xinyubo)



