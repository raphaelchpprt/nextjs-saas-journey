# Project Decisions Log

This file provides a chronological overview of all architectural decisions. For detailed context and reasoning, refer to the individual ADR files in the [`docs/adr`](./adr/) directory.

---

## 2025-09-25: Component and Page Syntax Convention
**Status:** Accepted | **File:** [0001-component-and-page-syntax-convention.md](./adr/0001-component-and-page-syntax-convention.md)

**Decision:** Use different syntax patterns for pages vs components:
- **Components:** Named exports with FC type (`export const Header: FC = () => ...`)  
- **Pages:** Default exports without FC type (`const HomePage = () => ...; export default HomePage`)

**Reasoning:** Provides semantic meaning through syntax, distinguishes between reusable components and route endpoints.

---

## 2025-09-25: TypeScript Path Alias Configuration  
**Status:** Accepted | **File:** [0002-typescript-path-alias-configuration.md](./adr/0002-typescript-path-alias-configuration.md)

**Decision:** Configure `@/*` alias to point to `src/*` with components in `src/components/`

**Reasoning:** Enables clean imports, follows Next.js conventions, avoids relative path hell.

---

## 2025-09-25: Jest and Unit Testing Setup
**Status:** Accepted | **File:** [0003-jest-unit-testing-setup.md](./adr/0003-jest-unit-testing-setup.md)

**Decision:** Implement Jest + React Testing Library for unit testing with `--watch` mode

**Reasoning:** Industry standard, excellent Next.js integration, focuses on user behavior testing.

---

## 2025-09-25: Architecture Decision Records Implementation
**Status:** Accepted | **File:** [0004-architecture-decision-records-implementation.md](./adr/0004-architecture-decision-records-implementation.md)

**Decision:** Use ADRs in `docs/adr/` directory to document technical decisions

**Reasoning:** Apply "Context Engineering" principles, maintain institutional knowledge, help future contributors understand the "why" behind decisions.

---

## 2025-09-25: Hybrid Documentation Approach
**Status:** Accepted | **File:** This decision (not yet in separate ADR)

**Decision:** Maintain both individual ADR files and this consolidated DECISIONS.md file

**Reasoning:** 
- Individual ADRs provide detailed context and are easy to reference/link
- Consolidated view provides quick overview and chronological perspective
- Best of both worlds for different use cases

---

## 2025-09-25: First Unit Test Implementation
**Status:** Accepted | **File:** Individual test files (e.g., `src/app/page.test.tsx`)

**Decision:** Implement first unit test for HomePage component using "Arrange, Act, Assert" pattern

**Reasoning:** Establishes testing discipline early, validates Jest configuration works correctly, provides template for future component tests.

---

## 2025-09-25: Smart Navigation with Active State
**Status:** Accepted | **File:** `src/components/Header.tsx`

**Decision:** Implement intelligent navigation that highlights the currently active page using `usePathname()` hook

**Reasoning:** Improves user experience by providing visual feedback about current location, follows modern web UX patterns.

---

## 2025-09-25: DRY Refactoring of Header Component
**Status:** Accepted | **File:** `src/components/Header.tsx`

**Decision:** Refactor Header component to use configuration-driven approach with NavItem interface and helper functions

**Reasoning:** Eliminates code duplication, makes adding new navigation items trivial, centralizes styling logic, improves maintainability.

---

## 2025-09-30: Server vs Client Components Architecture
**Status:** Accepted | **File:** `src/app/dashboard/`

**Decision:** Implement Dashboard with mixed Server/Client architecture demonstrating Next.js 13+ patterns

**Key patterns implemented:**
- Async Server Components for data fetching (`getStats()`)
- Client Components for interactivity (`useState`, event handlers)
- Server Actions for mutations (`syncTasksWithCount`)
- Streaming with `<Suspense>` boundaries
- Automatic loading/error UI with file conventions

**Reasoning:** Demonstrates modern Next.js architecture, optimal performance (server rendering + selective hydration), and best practices for production apps.

---

## 2025-09-30: Simulated Database Layer
**Status:** Accepted | **File:** `src/app/dashboard/db.ts`

**Decision:** Create in-memory database simulation for learning Server Actions

**Reasoning:** Allows practicing data persistence patterns without setting up real database, demonstrates separation of concerns, easy to replace with real DB later.

---

## 2025-10-02: Tailwind CSS with CVA Design System
**Status:** Accepted | **File:** `src/components/Card.tsx`

**Decision:** Implement reusable Card component system using class-variance-authority (CVA) and React Context API

**Key patterns implemented:**
- CVA for type-safe variant management (default, highlighted, danger)
- React Context to share variants with child components (DRY principle)
- Compound component pattern (Card, CardHeader, CardBody, CardFooter)
- `cn()` utility with clsx + tailwind-merge for intelligent class merging

**Reasoning:** Creates scalable design system, maintains type safety, reduces prop drilling, follows modern React patterns for component composition.

---

## 2025-10-03: Comprehensive Testing Strategy
**Status:** Accepted | **File:** [0005-testing-strategy.md](./adr/0005-testing-strategy.md)

**Decision:** Implement comprehensive testing strategy covering Server Components, Client Components, and Server Actions

**Coverage achieved:** 96.33% (target: 85%+)

**Key patterns implemented:**
- Server Component testing with async/await pattern
- Client Component testing with fireEvent and waitFor
- Global mocks for Next.js APIs (navigation, cache)
- Module-level mocking for database and Server Actions
- Jest + React Testing Library with @testing-library/jest-dom

**Reasoning:** High test coverage provides confidence for refactoring, catches regressions early, documents expected behavior, enables safe continuous deployment.

---

## 2025-10-09: Task Manager Mini-Project
**Status:** Accepted | **File:** [0006-task-manager-mini-project.md](./adr/0006-task-manager-mini-project.md)

**Decision:** Build complete Task Manager application as culmination of Next.js learning journey

**Coverage achieved:** 98%+ (45 tests total)

**Key technologies:**
- Zod for type-safe validation (createTaskSchema)
- useOptimistic for instant UI updates
- Server Actions for mutations (add/toggle/delete)
- In-memory database with UUID generation
- Filter system (All/Active/Completed)
- Complete test coverage with React Testing Library

**Features implemented:**
- Add, toggle, and delete tasks
- Real-time filtering with live counts
- Loading states and error boundaries
- Optimistic UI updates
- Form validation with Zod
- Reusable Card component system

**Reasoning:** Demonstrates complete full-stack architecture combining all learned patterns (Server Components, Client Components, Server Actions, testing, TypeScript, Tailwind, CVA). Production-ready architecture that's easy to extend with real database.

---

*Last updated: 2025-10-09*