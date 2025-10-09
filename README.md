# 🚀 Next.js SaaS Journey

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[![Tests](https://img.shields.io/badge/tests-45%20passing-success?style=flat-square&logo=jest)](https://github.com/raphaelchpprt/nextjs-saas-journey)
[![Coverage](https://img.shields.io/badge/coverage-97.29%25-brightgreen?style=flat-square)](https://github.com/raphaelchpprt/nextjs-saas-journey)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-orange?style=flat-square)](https://github.com/raphaelchpprt/nextjs-saas-journey/releases/tag/v0.1.0)

> Un projet d'apprentissage complet démontrant les patterns modernes de Next.js 15, TypeScript, Tailwind CSS et les meilleures pratiques de testing.

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

## 🚀 Installation

```bash
git clone https://github.com/raphaelchpprt/nextjs-saas-journey.git
cd nextjs-saas-journey
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## 📝 Scripts Disponibles

```bash
npm run dev              # Serveur de développement
npm run build            # Build production
npm test                 # Tests (watch mode)
npm run test:coverage    # Tests avec coverage
npm run test:tasks       # Tests du Task Manager
npm run test:dashboard   # Tests du Dashboard
npm run type-check       # Vérification TypeScript
```

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

## 📧 Contact

**Raphaël Chopart** • [@raphaelchpprt](https://github.com/raphaelchpprt)

---

Construit avec ❤️ comme parcours d'apprentissage Next.js moderne
