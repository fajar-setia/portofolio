# Repository Notes

## Shape and entrypoints

- This is a single-package React/Vite SPA, not a monorepo. `README.md` is the stock Vite starter text; use `package.json`, `vite.config.js`, and `src/` as the source of truth.
- `src/main.jsx` mounts `App` under `BrowserRouter basename="/portofolio"`. Routes are `/` (V1 `src/pages/beranda.jsx`), `/v2` (V2 home), and `/v2/projects/:id` (V2 project detail); V1/V2 code is split under `src/components/V1`, `src/components/V2`, and `src/layouts`.
- `src/pages/data.js` is the shared static catalog for both versions (`initialData` and `tools`); project screenshots and tool icons are imported from `src/assets`.
- V2's `HomePage` initializes Lenis and exposes it as `window.__lenis`, which `Navbar` uses for smooth anchor navigation. V2 dark mode persists under the `theme_v2` localStorage key; V1 intentionally shows a loading screen for 2 seconds.

## Commands

- Install reproducibly with `npm ci`.
- `npm run dev` — Vite HMR; use the `/portofolio/` base path rather than `/`.
- `npm run build` — production build into `dist/`; it currently passes.
- `npm run preview` — inspect the production build locally.
- `npm run lint` — runs `eslint .`; its config matches JS/JSX files, not the TSX files.
- `npm run deploy` — runs `predeploy` (`npm run build`) and publishes `dist/` with `gh-pages`; this is a remote write.

## Deployment and implementation gotchas

- `vite.config.js` sets `base: '/portofolio/'`; keep it aligned with the router basename and the GitHub Pages URL in `package.json`.
- Preserve both `public/404.html` and the inline redirect decoder in `index.html`; together they make direct GitHub Pages deep links resolve to the SPA.
- `vite` is intentionally aliased and overridden to `rolldown-vite@7.1.14`; do not casually replace it with stock Vite. The config also groups all `node_modules` into a `vendor` build chunk.
- Tailwind is v4 through `@tailwindcss/vite` and CSS `@import "tailwindcss"`; there is no PostCSS or Tailwind config to update.
- Root-relative public URLs are not rewritten by the `/portofolio/` base. Existing examples include `/fonts/...` in `src/App.css`, `/cv/CV.pdf` in V1, and V2's `/resume.pdf` (no such file is currently in `public`); use base-aware paths when changing them.
- V1's contact form posts to Formspree ID `mjkaaayv` directly in `src/pages/beranda.jsx`; there is no environment file or env-loading layer.
- `tsconfig.json` exists, but `typescript` is not a dependency and there is no `typecheck` script; bare `npx tsc` currently resolves an unrelated package. Vite transpiles TSX during the build.
- There is no test suite, formatter, CI workflow, pre-commit hook, or separate task-runner config. At this checkout, `npm run lint` exits non-zero with 3 `no-unused-vars` diagnostics; these are false positives for imported values used in JSX, so inspect the diagnostics rather than blindly deleting imports.
- Do not hand-edit `dist/`; it is generated and ignored. When touching the related code, preserve the V1 loading delay, V2 `window.__lenis` integration, and GitHub Pages redirect behavior.
