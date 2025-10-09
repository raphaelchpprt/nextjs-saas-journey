# 🚀 Next.js SaaS Journey

<!-- Core Technologies -->
[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<!-- Modern Features -->
[![Server Components](https://img.shields.io/badge/Server%20Components-✓-success?style=flat-square)](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
[![Server Actions](https://img.shields.io/badge/Server%20Actions-✓-success?style=flat-square)](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
[![App Router](https://img.shields.io/badge/App%20Router-✓-success?style=flat-square)](https://nextjs.org/docs/app)
[![Zod](https://img.shields.io/badge/Zod-4.1.11-3E67B1?style=flat-square&logo=zod&logoColor=white)](https://zod.dev/)

<!-- Testing & Quality -->
[![Tests](https://img.shields.io/badge/tests-45%20passing-success?style=flat-square&logo=jest)](https://github.com/raphaelchpprt/nextjs-saas-journey)
[![Coverage](https://img.shields.io/badge/coverage-97.29%25-brightgreen?style=flat-square&logo=codecov)](https://github.com/raphaelchpprt/nextjs-saas-journey)
[![Jest](https://img.shields.io/badge/Jest-29.7-C21325?style=flat-square&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing Library](https://img.shields.io/badge/Testing%20Library-16.1-E33332?style=flat-square&logo=testing-library&logoColor=white)](https://testing-library.com/)

<!-- AI & Developer Experience -->
[![GitHub Copilot](https://img.shields.io/badge/Built%20with-GitHub%20Copilot-purple?style=flat-square&logo=github)](https://github.com/features/copilot)
[![ADRs](https://img.shields.io/badge/ADRs-6%20documented-blue?style=flat-square)](./docs/adr/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-✓-FE5196?style=flat-square&logo=conventionalcommits&logoColor=white)](https://www.conventionalcommits.org/)


> A comprehensive Next.js 15 learning project built with GitHub Copilot, demonstrating modern patterns, testing strategies, and **AI-assisted context engineering**.

## 🎯 Main Projects

### 📝 Task Manager
Complete CRUD application with task management.
- Add, complete, and delete tasks
- Filters (All/Active/Completed)
- Optimistic UI with `useOptimistic`
- Zod validation
- 98%+ test coverage

### 📊 Dashboard
Server/Client architecture demonstration.
- Async Server Components with data fetching
- Interactive Client Components
- Server Actions for mutations
- Suspense and streaming

### 🎨 Design System
Reusable component library.
- Card components with CVA
- React Context API
- Compound component pattern
- Variants: default, highlighted, danger

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Framework** | Next.js 15.5.4 (App Router) |
| **Language** | TypeScript (strict mode) |
| **UI** | Tailwind CSS 4.0 + CVA |
| **Validation** | Zod 4.1.11 |
| **Testing** | Jest + React Testing Library |
| **State** | React 19.1.0 (useOptimistic, useTransition) |

## 📚 Demonstrated Concepts

- ✅ **Server Components** vs **Client Components**
- ✅ **Server Actions** for type-safe mutations
- ✅ **Optimistic UI** with `useOptimistic`
- ✅ **Zod Validation** with TypeScript
- ✅ **Comprehensive Testing** (97%+ coverage)
- ✅ **Design System** with CVA
- ✅ **Architecture Decision Records** (ADRs)

## 🤖 Context Engineering Focus

This project demonstrates **advanced AI collaboration techniques** using GitHub Copilot with structured context management.

### How Context Was Engineered

**Documentation as Persistent Memory**
- **[6 ADRs](./docs/adr/)**: Technical decisions documented before implementation
- **Conversation Summaries**: Context preserved across development sessions
- **Structured Docs**: `DECISIONS.md`, `CHANGELOG.md`, `CONTRIBUTING.md`

**Development Process**
1. Write ADR with requirements → 2. Build with Copilot → 3. Test (97% coverage) → 4. Update context

**Key Results**
- 97% test coverage through context clarity
- Zero breaking changes via full context awareness
- Consistent architecture maintained by ADRs

> **Learn More**: Explore [ADRs](./docs/adr/) and [commit history](https://github.com/raphaelchpprt/nextjs-saas-journey/commits/main) to see context engineering in practice.

## 🚀 Quick Start

```bash
git clone https://github.com/raphaelchpprt/nextjs-saas-journey.git
cd nextjs-saas-journey
npm install
npm run dev              # Start development server
npm test                 # Run tests (97% coverage)
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── dashboard/            # Dashboard feature
│   │   ├── page.tsx          # Server Component
│   │   ├── action.ts         # Server Actions
│   │   ├── db.ts             # Data layer
│   │   └── components/       # Feature components
│   └── tasks/                # Task Manager feature
│       ├── page.tsx          # Server Component
│       ├── actions.ts        # Server Actions
│       ├── db.ts             # In-memory database
│       ├── types.ts          # Zod schemas + types
│       └── components/       # Feature components
├── components/               # Shared components
│   ├── Card.tsx             # Design system
│   └── Header.tsx           # Navigation
└── lib/
  └── utils.ts             # Utility functions

docs/
├── DECISIONS.md             # Quick overview
└── adr/                     # Detailed ADRs
  ├── 0001-*.md
  ├── 0002-*.md
  └── ...
```

## 🧪 Testing

This project maintains **97%+ code coverage**.

```bash
# Run all tests
npm test                 # Watch mode
npm test -- --coverage   # Coverage report
```

**97.29% coverage** • 45 passing tests

📄 [ADR 0005 - Testing Strategy](./docs/adr/0005-testing-strategy.md)

## 📖 Documentation

- **📋 Overview**: [`docs/DECISIONS.md`](./docs/DECISIONS.md)
- **🏗️ ADRs**: [`docs/adr/`](./docs/adr/) (6 architectural decisions)
- **🤝 Contributing**: [`CONTRIBUTING.md`](./CONTRIBUTING.md)

## 📄 License

MIT License

---

**Built by [@raphaelchpprt](https://github.com/raphaelchpprt) with GitHub Copilot** • [raphaelch.me](https://raphaelch.me)

