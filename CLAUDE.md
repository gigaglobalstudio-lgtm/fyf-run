# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`fyf.run` — a Next.js 15 App Router e-commerce demo for the FYF streetwear/running brand. Korean-language UI. Sells physical products tied to a fictional crew of characters (CATTIVO, LEN, ROCO, DR. BLOCK, ECHO) and a recurring "ANOMALY DROP" event that runs on a 14-day cycle.

Stack: Next.js 15.0.3 (App Router, RSC) · React 19 RC · TypeScript (strict) · Prisma 5.22 · Postgres (or SQLite locally) · `jose` JWT in httpOnly cookie · Zustand 5 with `persist` for the cart · Tailwind v4 beta (only `@import 'tailwindcss'` plus a `@theme` block in `app/globals.css` — most styling is inline `style={}` props using the CSS custom properties defined there) · `bcryptjs` for password hashing.

## Commands

```bash
npm install --legacy-peer-deps   # React 19 RC requires the legacy flag
npm run setup                    # prisma generate + db push + seed (first run)
npm run dev                      # next dev → http://localhost:3000
npm run build                    # prisma generate + next build (no separate lint step)
npm run db:push                  # apply schema.prisma changes to DB
npm run db:seed                  # re-run prisma/seed.ts (wipes + re-creates products/characters/demo crew)
```

There is no test suite, no ESLint config, and no Prettier config. Type checking happens through `next build` / the editor.

Demo login (created by seed): `demo@fyf.run` / `fyf1234` (crew #00001).

## Database setup gotcha

`prisma/schema.prisma` is currently set to `provider = "postgresql"` — the same as `prisma/schema.production.prisma`. The README's "quick start" assumes SQLite, but that's no longer how the checked-in schema is configured. To run locally you must either:

- Provide a Postgres `DATABASE_URL` in `.env.local` (e.g. a Neon connection string), then `npm run setup`; or
- Edit `prisma/schema.prisma` to `provider = "sqlite"` with `url = "file:./dev.db"` before running setup.

The `*.db` and `.env*` files are gitignored. `JWT_SECRET` falls back to a hardcoded dev-only value in `lib/auth.ts` if unset — set a real one in production.

`schema.production.prisma` exists only because Vercel's build container needs the `binaryTargets` line; the deploy docs (`DEPLOY.md`, `DEPLOY_ONE_CLICK.md`) tell operators to `cp` it over `schema.prisma` before pushing. If you change the data model, edit **both** files.

## Architecture

### Data model (`prisma/schema.prisma`)

Five models, all integer auto-increment IDs:

- `Crew` — user account. `crewNumber` is a 5-digit string derived from `id` via `generateCrewNumber()` in `lib/auth.ts`. Signup creates the row with `crewNumber: 'TEMP'`, then updates it once the auto-increment ID is known (see `app/api/crew/signup/route.ts`). `points` and `rank` (`ROOKIE`/`RUNNER`/`FLOW`/`MASTER`) drive `/crew/me`.
- `Product` — `line` is one of `CORE` / `FLOW` / `ANOMALY` / `GOODS`. `character` is a nullable slug that joins to `Character.slug` (no FK — it's a plain string). `sizes` and `colors` are comma-separated strings parsed in the UI. `image` is currently an emoji placeholder rendered at large font sizes.
- `Order` + `OrderItem` — order number format `FYF-YYYY-MM-NNNN` generated in `app/api/orders/route.ts`. Order creation also increments the buyer's points by `floor(total / 100)` (1%).
- `Character` — referenced by `Product.character` and `Crew.favChar` via slug. `unlocked: false` characters (e.g. ECHO) are hidden from `/` but their detail page and products still render.

### Auth (`lib/auth.ts`)

- `createSession({ crewId, crewNumber, email, crewName })` signs a 30-day HS256 JWT and sets the `fyf_crew_session` httpOnly cookie.
- `getSession()` is called from `app/layout.tsx` on every request and passed into `<Header>` as a prop — that's how the header knows whether to show "CREW ID" or `#00001`.
- `getCurrentCrew()` does session lookup + `db.crew.findUnique`; use this in API routes (e.g. `/api/orders`) when you need the full row.
- Pages that require auth use `redirect('/crew/login')` from a server component (see `app/crew/me/page.tsx`). There is no Next.js `middleware.ts`.

### Cart (`lib/cart-store.ts`)

Client-only Zustand store, persisted to `localStorage` under key `fyf-cart`. Items are keyed by the `(productId, size, color)` tuple — adding the same tuple increments `qty`. Because the store is client-side, server-rendered components that read `count()` (the header) must guard with a `mounted` flag to avoid hydration mismatch — see `components/Header.tsx` and `app/checkout/page.tsx` for the pattern.

### Drop timing (`lib/drop.ts`)

Deterministic clock math from a hardcoded base epoch (`2026-04-14T20:00:00+09:00`) on a 14-day cycle. `getCurrentDropNumber()` starts numbering at 7 + cycles elapsed. The home page uses `getNextDropTime()` server-side and hands the timestamp to the client `<Countdown>` component, which ticks once per second.

### Routing conventions

- All page server components that read DB or session export `export const dynamic = 'force-dynamic'` to opt out of static rendering. Add this to any new server page that touches Prisma or cookies.
- Dynamic route params are typed as `Promise<{ slug: string }>` and `await`ed — Next 15 made params async.
- API routes under `app/api/**/route.ts` always return `NextResponse.json(...)` and use `{ ok: true }` / `{ error: '...' }` shapes. Korean-language error messages are intentional.
- Client components opt in with `'use client'`. Anything reading `useCart`, `useRouter`, or `useState` must be a client component (e.g. `app/shop/[slug]/AddToCartSection.tsx` is split out from the otherwise-server `page.tsx`).

### Prisma client (`lib/db.ts`)

Singleton pattern caching the `PrismaClient` on `global.prisma` outside production to survive Next dev hot-reload. Always import `db` from `@/lib/db` — never instantiate `new PrismaClient()` outside `prisma/seed.ts`.

### Path alias

`@/*` resolves to the repo root (see `tsconfig.json`). Use `@/lib/...`, `@/components/...` rather than relative paths.

### Styling

There is no component library and almost no Tailwind utility usage in JSX — visual design is inline `style={...}` referencing CSS custom properties (`var(--color-neon)`, `var(--color-purple)`, etc.) declared in `app/globals.css`'s `@theme` block. Reusable patterns are the `.btn-neon`, `.btn-outline`, `.badge*`, `.section-title`, and `.mono` classes in the same file. Match this style when adding UI rather than introducing a new system.

## Deployment

Target is Vercel (region `icn1`, see `vercel.json`). `installCommand` is pinned to `npm install --legacy-peer-deps` and `buildCommand` to `prisma generate && next build`. `DATABASE_URL` and `JWT_SECRET` must be set as environment variables. See `DEPLOY.md` and `DEPLOY_ONE_CLICK.md` for the full operator playbook (Neon Postgres setup, schema swap, env vars, optional custom domain).
