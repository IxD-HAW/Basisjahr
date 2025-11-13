# Basisjahr — static teaching pages

Small static site with example teaching pages and small interactive demos.

Quick start (local preview)

1. From the repository root, start a simple static web server. Python 3 (macOS):

```bash
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser. The root `index.html` is the default entry.

2. Alternatively (if Node is available):

```bash
npx http-server .
# or
npx live-server .
```

Project layout

- `index.html`, `git_und_vsc.html`, `test.html`, `button.html`, `roach.html` — top-level standalone pages.
- `style.css` — global stylesheet used by root pages.
- `img/` — images used by pages.
- `surprise/` — small demo page with its own `assets/css` and `assets/js` folders:
  - `surprise/index.html`
  - `surprise/assets/css/reset.css`
  - `surprise/assets/css/style.css`
  - `surprise/assets/js/script.js`

Development notes / conventions

- No build system: changes should work in the browser without compilation.
- Prefer small, focused edits. Avoid introducing new tooling (webpack, bundlers) unless requested.
- Keep styling either in `style.css` (global) or in the `surprise/assets/css` pair for the demo page.

Deployment (GitHub Pages)

- If you want to publish the site via GitHub Pages, ensure the content to publish is on `main` and at the repository root. Example site URL:

```
https://<username>.github.io/Basisjahr/index.html
```

Contributing

- Create small PRs with a single visual or content change and a clear title (e.g., `fix: responsive padding for index h1`).
- For visual changes, include screenshots in the PR description.

Contact

If you want a more opinionated setup (build, tests, CI), say so and I can scaffold minimal configs.