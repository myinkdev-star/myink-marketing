# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains a premium marketing agency website (M.Y. INK) and a supporting API server. Each package manages its own dependencies.

## Projects

### M.Y. INK Marketing Website (`artifacts/myink-website`)

Full-stack marketing agency website for **M.Y. INK Marketing** — a strategic marketing firm based in Nassau, Bahamas. Premium editorial aesthetic: Syne (display) + Inter (body), orange accent (`hsl(26 82% 52%)`), off-white background, charcoal dark sections.

**6 Pages:** Home, About, Services, Work, Insights, Contact

**Component Architecture:**
- `components/layout/` — Navbar (scroll-aware, mobile overlay), Footer, PageLayout
- `components/shared/` — FadeIn (framer-motion inView), PageHero, ServiceCategoryCard, InsightCard, ContactForm
- `components/sections/` — HeroSection, BrandIntroSection, ServicesPreview, WhyChooseUs, CaseStudyGrid, TestimonialsSection, CTASection

**Libraries:** React 19, TypeScript, Tailwind CSS, Wouter (routing with base), Framer Motion, react-hook-form + Zod, clsx + tailwind-merge

**Design Rules:** Billboard headlines at `clamp(48px, 8.5vw, 122px)`. Editorial ruled lists instead of card grids for feature/differentiator lists. No faded giant numbers as section markers. Stacked blockquotes for testimonials. Asymmetric grids for work previews. Orange accent used with restraint on labels, highlights, and primary CTAs only.

**Typography hierarchy:** h1 `letter-spacing: -0.03em`, h2 `-0.025em`, h3 `-0.015em`. Eyebrow labels: `text-[11px] font-bold uppercase tracking-[0.2em]`. Body copy: `text-[17px] leading-[1.9]`. Section heading sizes use `clamp()` fluid type.

**Section rhythm:** All major sections use `py-32 md:py-44`. Page heroes use `pt-40 pb-20 md:pt-52 md:pb-28`.

**Buttons:** `rounded-none`, `tracking-[0.1em]`, `uppercase`, `font-bold text-xs`. Primary: `bg-primary hover:brightness-110`. Outline: `border-input hover:border-primary hover:text-primary`. Default CTA copy: "Begin a Conversation".

**Interaction patterns:** Nav links — animated underline grows from left on hover, full-width underline in primary color when active. Row components (ServicesPreview, WhyChooseUs) — left border accent in primary scales in on hover (origin-top). InsightCard — top orange bar grows from left on hover, borderless design. FadeIn easing: `[0.16, 1, 0.3, 1]` (expo out). Image hover scale: `duration-900 group-hover:scale-[1.04]`.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
