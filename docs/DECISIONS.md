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

*Last updated: 2025-09-25*