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

## 2025-01-27: Incremental Static Regeneration Implementation
**Status:** Accepted | **File:** [0005-incremental-static-regeneration-implementation.md](./adr/0005-incremental-static-regeneration-implementation.md)

**Decision:** Implement ISR by adding `export const revalidate = 3600` to all page components for 1-hour revalidation intervals

**Reasoning:** Provides automatic content updates without full rebuilds while maintaining static generation performance benefits. Balances performance and content freshness for the learning journey application.

---

*Last updated: 2025-01-27*