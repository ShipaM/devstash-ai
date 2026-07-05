# DevStash Ai

A developer knowledge hub for snippets, commands, prompts, notes, files, images, links and custom types.

## Context files

Read the following to get the full context of the project:

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # run ESLint (eslint-config-next, ESLint 9 flat config)
npm start        # serve the production build
```

## Stack

- **Next.js 16.2.10** with the App Router (`src/app/`) — see AGENTS.md warning about breaking changes
- **React 19.2.4**
- **Tailwind CSS v4** via `@tailwindcss/postcss` — imported in `globals.css` as `@import "tailwindcss"`, no `tailwind.config` file
- **TypeScript 5**
- **Geist Sans / Geist Mono** loaded via `next/font/google` and exposed as CSS variables `--font-geist-sans` / `--font-geist-mono` in the root layout
