# Copilot instructions for the Basisjahr repository

This file gives concise, actionable guidance for an AI coding agent working in this repository (static website for teaching / student examples).

Project snapshot
- Type: static HTML/CSS/JS site (no build system). Files live at the repository root and in `surprise/assets/`.
- Entry points: `index.html`, `git_und_vsc.html`, `test.html`, plus `surprise/index.html` (with `assets/css` and `assets/js`).
- Styles: global `style.css` at root and project-specific CSS under `surprise/assets/css/`.
- Scripts: `surprise/assets/js/script.js` referenced by `surprise/index.html`.

What the agent should know (big picture)
- This repo is a set of standalone static pages (teaching materials). There is no build, package manager, or test harness. Changes should be conservative and avoid introducing new build tooling.
- Editing HTML/CSS/JS is the primary task. Prefer edits that work in a browser without additional steps.
- GitHub Pages is likely an intended deployment target. The `main` branch and root-level `index.html` are the canonical site entry points.

Project-specific patterns and conventions
- Keep markup minimal and self-contained. Several HTML files include inline `<style>` blocks (e.g. `index.html` and `git_und_vsc.html`); prefer adding or updating `style.css` when making global styling changes, and `surprise/assets/css/style.css` for `surprise/` related changes.
- `surprise/index.html` references `assets/css/reset.css` and `assets/css/style.css` — respect that structure when modifying or adding new assets for the `surprise/` page.
- Avoid adding package manager files (`package.json`, etc.) unless the user requests them explicitly.

Helpful file examples to reference
- `index.html` — small page with inline style; shows project-level styling choices (dark background, simple layout).
- `git_und_vsc.html` — larger instructional page with extensive inline CSS and semantic structure. Use it as an example for content style and tone.
- `surprise/index.html` — demonstrates asset folder layout: `surprise/assets/css/*` and `surprise/assets/js/*`.

Developer workflows and commands
- No build. To preview locally, use a static file server. Examples to suggest to human developers (do not run automatically):
  - Python (works on macOS): `python3 -m http.server 8000` from repo root.
  - Node-based: `npx http-server .` or `npx live-server .` if Node is available.
- Git operations follow standard GitHub flow. Commits should include clear messages and target `main` unless the user asks for a branch.
- Deploy to GitHub Pages: ensure the content you want published is in `main` root. The canonical URL pattern: `https://<username>.github.io/<repoName>/index.html`.

Patterns the agent must avoid
- Do not introduce new build tooling, transpilers, or dependency managers without explicit instruction.
- Avoid changing many files at once; prefer minimal, focused edits with clear intent.
- Don't assume there are JS frameworks or CSS preprocessors in use.

Integration points and external dependencies
- External links exist in `git_und_vsc.html` (e.g., `https://code.visualstudio.com/`, `https://desktop.github.com/`) but there are no runtime integrations or APIs.

Editing guidance and examples
- When fixing styling, prefer updating `style.css` at repo root for site-wide style and `surprise/assets/css/style.css` for the `surprise/` page. Example: small fix to `h1` color should go to `style.css`.
- When adding JS behavior for `surprise/index.html`, place code under `surprise/assets/js/` and reference it via the existing `<script>` tag.
- If you create new pages, follow the existing structure: HTML in root or a subfolder, CSS under an `assets/css` sibling, JS under `assets/js` sibling.

Examples of concrete edits an agent may be asked to perform
- Make `index.html` mobile-friendly by moving inline CSS into `style.css` and adding responsive rules.
- Implement a small JS interaction for `surprise/index.html` by editing/creating `surprise/assets/js/script.js` (button with id `surpriseBtn` already exists).
- Optimize images in `img/` by adding descriptive `alt` attributes and compressing file size — ask user before changing assets.

Testing and verification
- Manual verification in a browser is sufficient. Recommend running a local static server and opening the affected HTML file.
- For visual changes, include before/after screenshots in the PR description when possible.

When to ask the user for clarification
- If a change will add build tooling, tests, or CI, ask for confirmation.
- If edits affect deployment (GitHub Pages), confirm the desired target branch and whether the site is live.
- If multiple pages must be updated for consistent style, propose a small plan and ask before implementing broad changes.

If you modify files
- Open a small, focused PR with a clear title and description referencing the affected files and how to test locally.
- Keep commits small and descriptive (e.g. "fix: move h1 style to style.css and add responsive padding").

Contact / follow-up
- If any required workflow steps are missing from the repo (CI, test commands), ask the user directly before adding them.

---

If you want, I can also create a short `README.md` or a minimal `CONTRIBUTING.md` to document local preview steps. Reply with "create README" or "create CONTRIBUTING" and I will add them.
