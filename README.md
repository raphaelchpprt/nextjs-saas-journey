# 🚀 Next.js SaaS Journey

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tests](https://img.shields.io/badge/tests-45%20passing-success?style=flat-square&logo=jest)](https://github.com/raphaelchpprt/nextjs-saas-journey)
[![Coverage](https://img.shields.io/badge/coverage-97.29%25-brightgreen?style=flat-square)](https://github.com/raphaelchpprt/nextjs-saas-journey)

> A comprehensive Next.js 15 learning project built with GitHub Copilot, demonstrating modern patterns, testing strategies, and **AI-assisted context engineering**.

## 🎯 Projets Principaux

### 📝 Task Manager
Application CRUD complète avec gestion de tâches.
- Ajout, complétion et suppression de tâches
- Filtres (All/Active/Completed)
- Optimistic UI avec `useOptimistic`
- Validation Zod
- 98%+ de couverture de tests

### 📊 Dashboard
Démonstration d'architecture Server/Client.
- Server Components async avec data fetching
- Client Components interactifs
- Server Actions pour les mutations
- Suspense et streaming

### 🎨 Design System
Bibliothèque de composants réutilisables.
- Card components avec CVA
- React Context API
- Compound component pattern
- Variants : default, highlighted, danger

## 🛠️ Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | Next.js 15.5.4 (App Router) |
| **Language** | TypeScript (strict mode) |
| **UI** | Tailwind CSS 4.0 + CVA |
| **Validation** | Zod 4.1.11 |
| **Testing** | Jest + React Testing Library |
| **State** | React 19.1.0 (useOptimistic, useTransition) |

## � Concepts Démontrés

- ✅ **Server Components** vs **Client Components**
- ✅ **Server Actions** pour mutations type-safe
- ✅ **Optimistic UI** avec `useOptimistic`
- ✅ **Validation Zod** avec TypeScript
- ✅ **Testing** complet (97%+ coverage)
- ✅ **Design System** avec CVA
- ✅ **Architecture Decision Records** (ADRs)

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
npm test -- --coverage   # Rapport de couverture
```

**97,29% de couverture** • 45 tests passants

📄 [ADR 0005 - Stratégie de tests](./docs/adr/0005-testing-strategy.md)

## 📖 Documentation

- **📋 Vue d'ensemble** : [`docs/DECISIONS.md`](./docs/DECISIONS.md)
- **🏗️ ADRs** : [`docs/adr/`](./docs/adr/) (6 décisions architecturales)
- **🤝 Contribuer** : [`CONTRIBUTING.md`](./CONTRIBUTING.md)

## � Licence

MIT License

---

**Built by [@raphaelchpprt](https://github.com/raphaelchpprt) with GitHub Copilot** • [raphaelch.me](https://raphaelch.me)
