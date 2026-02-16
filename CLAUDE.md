# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Three.js 기반 포트폴리오 웹사이트 개발 환경. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, React Three Fiber를 사용합니다.

## Commands

- `pnpm dev` — Start development server (localhost:3000)
- `pnpm build` — Production build
- `pnpm lint` — Run ESLint (flat config, v9)
- `pnpm start` — Start production server

## Architecture

- **App Router** with Server Components by default; Client Components (`"use client"`) used for Three.js components
- **Path alias**: `@/*` maps to `./src/*`
- **Dynamic imports**: Three.js components use `next/dynamic` with `ssr: false` for client-side rendering

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Geist fonts
│   ├── page.tsx            # Main page with ThreeBackground
│   └── globals.css         # Global styles with CSS variables
└── components/
    └── three/
        ├── ThreeBackground.tsx  # Main 3D background wrapper
        ├── LazyCanvas.tsx       # Canvas setup with performance config
        └── common/
            ├── SceneSetup.tsx   # Basic scene setup
            └── Lights.tsx       # Lighting configuration
```

## Three.js Setup

- **React Three Fiber** (`@react-three/fiber`): React renderer for Three.js
- **@react-three/drei**: Helper components and abstractions
- **@react-three/postprocessing**: Post-processing effects
- **Performance config**:
  - Camera: position [0, 0, 10], fov 50
  - DPR: [1, 2] for retina displays
  - Power preference: high-performance

## Styling

- Tailwind CSS v4 with `@tailwindcss/postcss`
- Theme colors defined as CSS custom properties in `src/app/globals.css`
- Background color: #f4e4d7 (cream/beige)

## Git Conventions

- **Commit messages must be written in Korean**
