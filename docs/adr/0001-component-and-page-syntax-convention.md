# 1. Component and Page Syntax Convention

- **Status:** Accepted
- **Date:** 2025-09-25

## Context and Problem Statement

As the project grows, we need a consistent and modern syntax for defining React components and Next.js pages. The goal is to ensure clarity, maintainability, and alignment with current best practices in the React/Next.js ecosystem. An initial decision to use `FC` for all components was challenged to adopt a more nuanced approach.

## Decision Drivers

- The need to distinguish between reusable 'building block' components and 'route entrypoint' pages.
- The evolution of React best practices, particularly the declining use of `React.FC` in React 18+.
- The requirement for page files (`page.tsx`) in the App Router to have a default export.

## Considered Options

- **Option 1:** Use `const MyComponent: FC = () => ...` for everything - Simple and consistent, but doesn't reflect the latest trends and the special nature of pages.
- **Option 2:** Don't use `FC` at all - Follows the latest trend from the Vercel/Next.js team, relying on TypeScript's type inference. Lacks an explicit distinction between component types.
- **Option 3:** A hybrid, nuanced approach - Use different conventions for different types of files to add semantic meaning to the syntax.

## Decision

We have decided to adopt the **hybrid approach (Option 3)**:

1. **For Reusable Components (e.g., in `src/components/`)**:
   - Use a **named export**.
   - Use the `FC` type for explicitness.
   - Example: `export const Header: FC = () => { ... };`

2. **For Pages (e.g., in `src/app/.../page.tsx`)**:
   - Use a **default export** (as required by Next.js).
   - **Do not** use the `FC` type, letting TypeScript infer the return type.
   - Example: `const HomePage = () => { ... }; export default HomePage;`

## Consequences

### Positive

- The syntax itself provides context about the file's role (reusable component vs. page).
- The project stays aligned with modern best practices while maintaining explicit type safety for shared components.
- The codebase is clearer for new developers joining the project.

### Negative

- Requires developers to remember two slightly different conventions, which adds a small amount of cognitive overhead.