# 🚀 Next.js SaaS Journey

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[![Tests](https://img.shields.io/badge/tests-45%20passing-success?style=flat-square&logo=jest)](https://github.com/raphaelchpprt/nextjs-saas-journey)
[![Coverage](https://img.shields.io/badge/coverage-97.29%25-brightgreen?style=flat-square)](https://github.com/raphaelchpprt/nextjs-saas-journey)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-orange?style=flat-square)](https://github.com/raphaelchpprt/nextjs-saas-journey/releases/tag/v0.1.0)

A comprehensive learning project demonstrating modern Next.js 15 patterns, TypeScript, Tailwind CSS, and testing best practices.

## 📚 What This Project Demonstrates

This is a **learning journey** through Next.js 13+ App Router featuring:

- ✅ **Server Components** vs **Client Components** architecture
- ✅ **Server Actions** for type-safe mutations
- ✅ **Zod** validation with TypeScript
- ✅ **Tailwind CSS 4.0** with CVA (class-variance-authority)
- ✅ **React Context API** for component composition
- ✅ **Optimistic UI** updates with `useOptimistic`
- ✅ **Jest + React Testing Library** (97% coverage)
- ✅ **Architecture Decision Records** (ADRs)

## 🎯 Featured Projects

### 1. 📊 Dashboard
**Location:** `/dashboard`

Demonstrates Server/Client architecture:
- Async Server Component with data fetching
- Interactive Client Component with state
- Server Actions with bidirectional sync
- Loading states with Suspense
- Error boundaries

**Key Patterns:**
- `async` Server Components
- `'use client'` directive
- `useTransition` for non-blocking updates
- `revalidatePath` for cache invalidation

### 2. ✅ Task Manager
**Location:** `/tasks`

Full-stack CRUD application:
- Add, complete, and delete tasks
- Filter by status (All/Active/Completed)
- Optimistic UI updates
- Zod validation
- 98%+ test coverage

**Key Technologies:**
- `zod` for runtime validation
- `useOptimistic` for instant UI
- Server Actions for mutations
- In-memory database (ready for real DB)

### 3. 🎨 Design System
**Location:** `src/components/Card.tsx`

Reusable component library:
- CVA for variant management
- React Context for DRY principles
- Compound component pattern
- Full TypeScript support

**Variants:**
- `default` | `highlighted` | `danger`
- `sm` | `md` | `lg`

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15.5.4 (App Router) |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS 4.0 |
| **Validation** | Zod 4.1.11 |
| **Testing** | Jest + React Testing Library |
| **Components** | CVA + clsx + tailwind-merge |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (for `crypto.randomUUID()`)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/raphaelchpprt/nextjs-saas-journey.git
cd nextjs-saas-journey

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build
npm start

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Type checking
npm run type-check
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
npm test

# Run specific test file
npm test -- Card.test.tsx

# Run with coverage report
npm test -- --coverage --watchAll=false

# Watch mode (default)
npm test
```

### Test Organization
- **Unit tests**: `*.test.tsx` alongside components
- **DB tests**: `*.test.ts` for data layer
- **Mocks**: Configured in `jest.setup.ts`

### Coverage Breakdown
- **Components**: 100%
- **Dashboard**: 100% (except Server Actions)
- **Tasks**: 98%+
- **Overall**: 97.29%

## 🏛️ Architecture Decision Records (ADRs)

This project documents all technical decisions using ADRs.

### Quick Access
- **📋 Overview**: [`docs/DECISIONS.md`](./docs/DECISIONS.md)
- **📁 Detailed ADRs**: [`docs/adr/`](./docs/adr)

### Key Decisions
1. [Component & Page Syntax Convention](./docs/adr/0001-component-and-page-syntax-convention.md)
2. [Server vs Client Components](./docs/adr/0002-server-vs-client-components.md)
3. [Tailwind + CVA Design System](./docs/adr/0003-tailwind-cva-design-system.md)
4. [Testing Strategy](./docs/adr/0005-testing-strategy.md)
5. [Task Manager Architecture](./docs/adr/0006-task-manager-mini-project.md)

## 📖 Learning Path

If you're learning from this project, follow this sequence:

1. **Setup & Config** → TypeScript strict mode, path aliases
2. **Basic Components** → Header with active state
3. **Testing Foundation** → Jest setup, first tests
4. **Server/Client Split** → Dashboard with mixed architecture
5. **Design System** → Card components with CVA
6. **Advanced Testing** → Server Components, optimistic UI
7. **Full-Stack App** → Task Manager with Zod validation

## 🎓 Key Learnings

### Server Components
```typescript
// Can be async, fetch data directly
export default async function Page() {
  const data = await getData();
  return <div>{data}</div>;
}
```

### Client Components
```typescript
'use client';

// Can use hooks, event handlers
export default function Interactive() {
  const [state, setState] = useState(0);
  return <button onClick={() => setState(s => s + 1)}>{state}</button>;
}
```

### Server Actions
```typescript
'use server';

export async function createTask(formData: FormData) {
  const validated = schema.parse(formData);
  await db.create(validated);
  revalidatePath('/tasks');
  return { success: true };
}
```

### Optimistic UI
```typescript
'use client';

const [optimisticState, setOptimistic] = useOptimistic(
  serverState,
  (state, newValue) => [...state, newValue]
);

const handleAdd = (value) => {
  setOptimistic(value);  // Update UI instantly
  serverAction(value);    // Sync with server
};
```

## 🚦 Production Readiness

### Ready for Production ✅
- TypeScript strict mode
- Comprehensive test coverage
- Error boundaries
- Loading states
- Type-safe APIs
- Documented decisions

### Needs for Production ⚠️
- Real database (Postgres, MongoDB)
- Authentication (NextAuth.js)
- Environment variables
- API rate limiting
- Monitoring & logging
- CI/CD pipeline

## 🤝 Contributing

This is a learning project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Add tests for new features
4. Update ADRs for significant changes
5. Submit a pull request

## 📝 License

MIT License - feel free to use this for learning!

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Zod](https://zod.dev)
- [Architecture Decision Records](https://adr.github.io)

## 📧 Contact

**Raphaël Chopart**
- GitHub: [@raphaelchpprt](https://github.com/raphaelchpprt)

---

Built with ❤️ as a learning journey through modern Next.js development.
