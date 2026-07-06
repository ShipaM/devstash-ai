# Current Feature

Dashboard UI — Phase 1 - Building the main dashboard layout and foundational components

## Status

<!-- Not Started|In Progress|Completed -->

## Goals

<!-- Goals & requirements -->

Phase 1 of 3 for the dashboard UI layout. See [dashboard-phase-1-spec.md](features/dashboard-phase-1-spec.md) and the `dashboard-ui-main.png` screenshot for reference.

- ShadCN UI initialization and components
- ShadCN component installation
- Dashboard route at `/dashboard`
- Main dashboard layout and any global styles
- Dark mode by default
- Top bar with search and new item button (display only)
- Placeholder for sidebar and main area — just an `h2` with "Sidebar" and "Main" for now

## Notes

<!-- Any extra notes -->

- Full spec: [context/features/dashboard-phase-1-spec.md](features/dashboard-phase-1-spec.md)

## History

<!-- Keep this updated. Earliest to latest -->

- Project setup and boilerplate cleanup
- Initial Next.js 16 + Tailwind CSS v4 setup, removed default scaffold assets, added CLAUDE.md and context files
- Dashboard UI Phase 1: initialized shadcn/ui (base-nova preset, neutral base color), added button/input components, created `/dashboard` route with layout shell (sidebar + top bar placeholders), display-only top bar (search + New Collection/New Item), dark mode by default, fixed font-var wiring in globals.css
