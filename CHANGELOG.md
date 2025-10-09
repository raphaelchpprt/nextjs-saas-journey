# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Real database integration (Postgres/Vercel Postgres)
- User authentication (NextAuth.js)
- Task editing functionality
- Due dates and priorities
- Drag-and-drop task reordering

## [0.1.0] - 2025-10-09

### Added - Task Manager 🎉
- Complete CRUD task management system
- Zod validation for type-safe forms
- Optimistic UI updates with `useOptimistic`
- Filter system (All/Active/Completed)
- In-memory database with UUID generation
- 15 comprehensive tests (98%+ coverage)
- Loading and error boundaries
- TaskForm and TaskList components

### Added - Testing Infrastructure
- Jest + React Testing Library setup
- 97%+ code coverage across project
- Global mocks for Next.js APIs
- Test suites for all major components
- 45 total tests passing
- Coverage reporting scripts

### Added - Design System
- Card component with CVA variants
- React Context for DRY principles
- Compound component pattern
- Three variants: default, highlighted, danger
- Three sizes: sm, md, lg
- Full TypeScript support

### Added - Dashboard Feature
- Server Component with async data fetching
- Interactive Client Component with state
- Server Actions for bidirectional sync
- Suspense boundaries for streaming
- Loading skeleton with animation
- Error boundary

### Added - Documentation
- 6 detailed Architecture Decision Records (ADRs)
- Consolidated DECISIONS.md overview
- Comprehensive README with examples
- CONTRIBUTING.md guide
- ADR template for future decisions

### Added - Developer Experience
- TypeScript strict mode
- Path aliases (@/*)
- ESLint configuration
- Smart navigation with active state
- Turbopack for faster builds
- Utility scripts in package.json

### Technical
- Next.js 15.5.4 with App Router
- React 19.1.0 with latest hooks
- TypeScript 5+ strict mode
- Tailwind CSS 4.0
- Zod 4.1.11 for validation
- CVA for component variants

## [0.0.1] - 2025-09-25

### Added
- Initial project setup with create-next-app
- Basic Next.js 15 configuration
- Tailwind CSS setup
- TypeScript configuration
- Home, About, and Pricing pages
- Basic Header navigation component

---

## Version History Summary

- **v0.1.0** (2025-10-09): Complete learning project with Task Manager, testing, and documentation
- **v0.0.1** (2025-09-25): Initial setup

## Migration Guides

### From 0.0.1 to 0.1.0

No breaking changes - only additions. All existing functionality preserved.

New features:
1. Navigate to `/dashboard` for Server/Client architecture demo
2. Navigate to `/tasks` for full Task Manager app
3. Check `docs/` folder for ADRs and decisions
4. Run `npm test` to see test coverage

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to contribute.

## License

MIT License - See [LICENSE](./LICENSE) for details.
