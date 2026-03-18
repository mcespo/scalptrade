# Statamic Project — Claude AI Context

## Stack

- **CMS**: Statamic 6.x (flat-file, Stache driver)
- **Backend**: Laravel 12 / PHP 8.3+
- **Frontend build**: Vite + `laravel-vite-plugin`
- **CSS**: Tailwind CSS 4 (CSS-first config via `@theme`, no `tailwind.config.js`)
- **JS**: Alpine.js 3 with Focus + Intersect plugins
- **SEO**: Aardvark SEO addon (`withcandour/aardvark-seo ^6.0`)
- **Images**: `spatie/statamic-responsive-images ^6.0`
- **Deployment**: Laravel Forge via git push

---

## Project Structure

```
resources/
  css/tailwind.css     # TW4 CSS-first entry: @import, @source, @plugin, @theme
  css/site.css         # Custom site styles (imported by tailwind.css)
  js/site.js           # Alpine.js entry point
  views/
    layout.antlers.html
    partials/
resources/fonts/       # Self-hosted WOFF2/WOFF font files
patches/               # Composer vendor patches (cweagans/composer-patches)
public/build/          # Vite output (do not commit)
```

---

## Build

```bash
npm run dev       # Vite dev server with HMR
npm run build     # Production build → public/build/
```

Vite config inputs: `resources/css/tailwind.css` + `resources/js/site.js`

In templates, assets are loaded via Statamic's built-in Vite tag:
```html
{{ vite src="resources/css/tailwind.css|resources/js/site.js" }}
```

---

## Tailwind 4 Rules

- **No `tailwind.config.js`** — all config lives in `resources/css/tailwind.css`
- Theme tokens use `@theme { --color-* --font-family-* }` syntax
- Content scanning uses `@source` directives (not `content:` array)
- Plugins loaded via `@plugin "@tailwindcss/forms"` etc.
- PostCSS pipeline: `@tailwindcss/postcss` only (no `tailwindcss`, `postcss-nested`, `autoprefixer`)

### Tailwind 4 Breaking Changes to Watch For

| Old (v3)                        | New (v4)              |
|---------------------------------|-----------------------|
| `flex-shrink-0`                 | `shrink-0`            |
| `bg-black bg-opacity-50`        | `bg-black/50`         |
| `ring-black ring-opacity-5`     | `ring-black/5`        |
| `aspect-w-3 aspect-h-2`         | `aspect-[3/2]`        |
| standalone `transform` class    | remove (always on)    |

---

## Aardvark SEO

### Layout wiring (required in `layout.antlers.html`)
```html
{{ aardvark-seo:head }}   {{# in <head> — outputs meta, OG, canonical #}}
{{ yield:seo_schema }}    {{# in <head> — outputs per-template JSON-LD #}}
{{ aardvark-seo:footer }} {{# before </body> — outputs scripts if any #}}
```

### Per-template JSON-LD schema
Inject structured data using Statamic's section/yield system:
```html
{{ section:seo_schema }}
<script type="application/ld+json">
{ ... }
</script>
{{ /section:seo_schema }}
```
Supported types used in this project: `Article`, `Event`

### Known Bug — Aardvark SEO 6.0.0 on Statamic 6
`PageDataParser::generatePageTitle()` passes a `Collection` to `Parse::template()`,
which requires an `array`. Fixed via vendor patch.

Patch file: `patches/aardvark-seo-collection-to-array.patch`

**`cweagans/composer-patches` must be in `require` (not `require-dev`)** so the patch
applies on production `composer install --no-dev` runs.

```json
"require": {
    "cweagans/composer-patches": "*"
},
"extra": {
    "patches": {
        "withcandour/aardvark-seo": {
            "Fix Collection passed to Parse::template() on Statamic 6": "patches/aardvark-seo-collection-to-array.patch"
        }
    }
}
```

If the patch isn't applying after `composer install`, force it:
```bash
composer reinstall withcandour/aardvark-seo
```

---

## Accessibility Standards

- Every page must have a skip-to-content link as the first focusable element
- Decorative SVGs: wrap in `<span aria-hidden="true">` or add `aria-hidden="true"` directly
- Interactive elements (links, buttons) need visible focus rings (`focus-visible:ring-2`)
- Do not nest block elements (`<h2>`, `<h3>`, `<p>`) inside `<button>` — use `<span>` with equivalent styling
- Images: `alt` must be descriptive; purely decorative images use `alt=""`
- `<time>` elements must use a dynamic `datetime` attribute, never hardcoded dates

---

## Performance

- Hero/LCP images: `loading="eager" fetchpriority="high"`
- All other images: `loading="lazy" decoding="async"` with explicit `width` and `height`
- Self-hosted fonts use `font-display: swap`
- `site.js` loaded with `defer` (handled automatically by `{{ vite }}` tag for JS modules)

---

## Deployment (Laravel Forge)

### Deploy script essentials
```bash
cd /home/forge/yourdomain.com
git checkout -- composer.lock   # prevent local server changes blocking pull
git pull origin main
composer install --no-interaction --prefer-dist --optimize-autoloader
npm ci && npm run build
php artisan cache:clear
php artisan statamic:stache:warm
```

### Common Forge/git errors

**Stale remote ref lock:**
```
error: cannot lock ref 'refs/remotes/origin/main'
```
Fix on server:
```bash
git remote prune origin
git fetch origin
# or force-delete the ref:
git update-ref -d refs/remotes/origin/main
```

**Local changes blocking merge (`composer.lock`):**
```
error: Your local changes to the following files would be overwritten by merge: composer.lock
```
Add to top of deploy script: `git checkout -- composer.lock`

---

## Statamic Upgrade Notes (v5 → v6)

- `statamic/cms` requires `^6.x`
- `laravel/framework ^12.0`, `laravel/sanctum ^4.0`, `php ^8.3`
- `spatie/statamic-responsive-images ^6.0`
- `withcandour/aardvark-seo ^6.0` (apply vendor patch — see above)
- Run `php artisan statamic:install` after `composer install` to publish updated CP assets

---

## Do Not

- Commit `public/build/` — Vite output is generated on deploy
- Commit `vendor/` — installed via `composer install`
- Use `{{ mix }}` tags — this project uses `{{ vite }}`
- Put `cweagans/composer-patches` in `require-dev` — it must be in `require`
- Hardcode dates in `datetime` attributes — always use dynamic field values
- Nest block-level elements inside `<button>`
