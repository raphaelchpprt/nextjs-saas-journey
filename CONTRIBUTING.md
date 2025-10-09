# Contributing Guide

Thank you for your interest in this project! Here's how to contribute.

## 🚀 Quick Start

```bash
# Clone the project
git clone https://github.com/raphaelchpprt/nextjs-saas-journey.git
cd nextjs-saas-journey

# Install dependencies
npm install

# Start the dev server
npm run dev

# Run tests
npm test
```

## 📋 Pre-commit Checklist

- [ ] Tests pass (`npm test:ci`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] Code compiles (`npm run build`)
- [ ] New files have tests
- [ ] Important decisions are documented (ADR)

## 🧪 Testing Guidelines

### Add tests for:
- ✅ New components
- ✅ New features
- ✅ Server Actions
- ✅ Zod validation

### Test structure:
```typescript
describe('ComponentName', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('describes the expected behavior', () => {
    // Arrange
    // Act
    // Assert
  });
});
```

### Useful commands:
```bash
npm test:coverage      # Full coverage
npm test:tasks         # Task Manager tests
npm test:dashboard     # Dashboard tests
```

## 📝 Documentation

### When to create an ADR?

Create an ADR for:
- ✅ Important architectural choices
- ✅ New dependencies
- ✅ Pattern changes
- ✅ Decisions affecting multiple components

### ADR Template:

```markdown
# ADR XXXX: Decision Title

## Status
Accepted | Proposed | Deprecated | Superseded

## Context
What problem are we trying to solve?

## Decision
What solution have we chosen?

## Consequences
### Positive
- Benefits

### Negative
- Drawbacks

## Alternatives Considered
What other options have we evaluated?
```

## 🎨 Code Style

### TypeScript
- Always use **strict mode**
- Avoid `any`, prefer `unknown`
- Explicitly type component props

### React
- Prefer **function components**
- Use appropriate hooks
- `'use client'` only when necessary

### Tailwind
- Use `cn()` function to merge classes
- Prefer CVA for complex variants
- Maintain consistent class order

### Naming Conventions
- **Components**: PascalCase (`TaskForm.tsx`)
- **Files**: camelCase (`db.ts`, `actions.ts`)
- **Tests**: `*.test.tsx` or `*.test.ts`
- **Types**: PascalCase for interfaces/types

## 🌳 Git Workflow

### Branches
- `main`: Production-ready code
- `feature/*`: New features
- `fix/*`: Bug fixes
- `docs/*`: Documentation

### Commits
Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(tasks): add edit functionality
fix(dashboard): correct stats calculation
docs(adr): add decision for authentication
test(tasks): increase coverage to 98%
refactor(card): simplify variant logic
```

### Pull Requests
1. Create a branch from `main`
2. Make your changes
3. Add tests
4. Update documentation
5. Create a PR with detailed description

## 🐛 Reporting Bugs

Include:
- Node.js version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Error logs

## 💡 Proposing Features

1. Open an issue for discussion
2. Describe the use case
3. Propose a solution
4. Wait for feedback before implementing

## ✅ Review Process

Before merging:
- [ ] At least 1 approved review
- [ ] All tests pass
- [ ] Coverage maintained or improved
- [ ] Documentation up to date
- [ ] No conflicts with `main`

## 🎓 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Testing Library](https://testing-library.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📧 Questions?

Open a [Discussion](https://github.com/raphaelchpprt/nextjs-saas-journey/discussions) on GitHub!

---

Thank you for contributing! 🙏

