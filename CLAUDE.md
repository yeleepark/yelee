# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page portfolio website built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, and React Query.

## Commands

- `pnpm dev` — Start development server (localhost:3000)
- `pnpm build` — Production build
- `pnpm lint` — Run ESLint (flat config, v9)
- `pnpm start` — Start production server

## Architecture

- **App Router** with Server Components by default; Client Components (`"use client"`) used for interactive parts (Header, Contact, AnimatedSection)
- **Single-page layout**: `src/app/page.tsx` composes section components, each with a scroll anchor ID (#home, #about, #skills, #projects, #experience, #contact)
- **Static data**: All profile, skills, projects, and experience content lives in `src/data/profile.ts` — this is the primary file to edit for content changes
- **Path alias**: `@/*` maps to `./src/*`

## Key Directories

- `src/components/sections/` — Page sections (Hero, About, Skills, Projects, Experience, Contact)
- `src/components/ui/` — Reusable components (AnimatedSection, Button, Card, SectionTitle)
- `src/components/layout/` — Header and Footer
- `src/hooks/` — Custom hooks (useContact mutation for form submission)
- `src/lib/` — Axios instance and React Query client config
- `src/providers/` — QueryProvider wrapper (client component)

## Styling

- Tailwind CSS v4 with `@tailwindcss/postcss`
- Theme colors defined as CSS custom properties in `src/app/globals.css` (primary: #4f46e5)
- Responsive breakpoint: `md:` for tablet/desktop layouts

## Data Fetching & State

- React Query for server state; configured with 5-min stale time, no window-focus refetch
- Axios instance reads `NEXT_PUBLIC_API_URL` env variable for API base URL
- Contact form uses `useMutation` hook in `src/hooks/useContact.ts`

## Git Conventions

- **Commit messages must be written in Korean**
