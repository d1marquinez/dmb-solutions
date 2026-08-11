# DMB Solutions — Multi-site website

Static website bundle built with **Next.js** (`output: export`) that serves **multiple subdomains** as separate business sites from one single deployment. Used both for the DMB Solutions landing page and for example business websites shown to potential clients.

## Sites

| Subdomain | Site |
|---|---|
| `main.gohost.one` | DMB Solutions landing + portfolio |
| `barber.gohost.one` | Example: barber shop (Golden Scissors) |
| `restaurant.gohost.one` | Example: restaurant (La Tavola) |
| `florist.gohost.one` | Example: flower shop (Bloom & Stem) |

Because the deploy is fully static, **all subdomains serve the same `index.html`**. The correct site is chosen at runtime in the browser by reading `window.location.hostname` (`getSiteKey()` in `lib/i18n.ts`), so you only need one Coolify resource pointing at all subdomains.

## Language

- Auto-detects the device language (`navigator.language`): shows Spanish if the browser is Spanish, English otherwise.
- Manual **EN/ES switch** visible in the header of every site (persisted in `localStorage`, takes priority over auto-detection).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000 (always shows the landing/main)
```

To preview a specific subdomain locally, edit `lib/i18n.ts` `getSiteKey()` temporarily, or add a local hosts entry and serve over an `x-forwarded-host`.

## Build

```bash
npm run build    # outputs static site to ./dist
```

## Deploy in Coolify

The repo builds a static export (`next.config.mjs` → `output: 'export'`). Recommended Coolify set-up:

1. **Import repository**: `github.com/d1marquinez/dmb-solutions`
2. **Build Pack**: `Nixpacks`
3. **Base Domain**: `gohost.one`
4. **Domains** (comma-separated):
   ```
   main.gohost.one, barber.gohost.one, restaurant.gohost.one, florist.gohost.one
   ```
5. Coolify/Traefik issues a Let's Encrypt certificate per subdomain automatically.
6. Create the DNS records in Cloudflare (an existing wildcard `*.gohost.one` covers all of them) pointing to the Contabo VPS.

> Since it's static, any simple static host (GitHub Pages, `npx serve ./dist`, nginx) works — you are not locked to Coolify.

## Project layout

```
app/                 # Next.js App Router
  page.tsx           # server component → mounts SiteRouter
  layout.tsx         # root layout
  globals.css        # shared styles
components/
  SiteRouter.tsx     # chooses the site from the subdomain
  LangContext.tsx    # shared language state (EN/ES)
  LanguageSwitch.tsx # visible EN/ES toggle
  Landing.tsx        # main.gohost.one
  Barber.tsx         # barber.gohost.one
  Restaurant.tsx     # restaurant.gohost.one
  Florist.tsx        # florist.gohost.one
lib/
  i18n.ts            # language detection + getSiteKey()
  site-registry.ts   # central registry of subdomains/sites
```
