# ADR 0006: Task Manager Mini-Project with Zod Validation

## Status
Accepted

## Context
As the culmination of our Next.js learning journey, we needed a complete mini-project that demonstrates:
- Full-stack architecture (Server Components + Client Components + Server Actions)
- Form validation with TypeScript type safety
- Optimistic UI updates for better user experience
- Complete test coverage (80%+ target)
- Reusable component library (Card system from ADR 0003)

The Task Manager serves as a practical example combining all learned concepts.

## Decision

### Architecture Overview
```
src/app/tasks/
├── page.tsx              # Server Component - Main page
├── loading.tsx           # Loading skeleton
├── error.tsx             # Error boundary
├── types.ts              # TypeScript types + Zod schemas
├── db.ts                 # In-memory database
├── actions.ts            # Server Actions
└── components/
    ├── TaskForm.tsx      # Client Component - Add tasks
    ├── TaskList.tsx      # Client Component - Display/manage tasks
    ├── TaskForm.test.tsx
    └── TaskList.test.tsx
```

### Key Technical Decisions

#### 1. Validation Strategy: Zod
**Library**: `zod@4.1.11`

**Schema Definition**:
```typescript
export const createTaskSchema = z.object({
  title: z.string().min(1).max(200),
  completed: z.boolean().optional().default(false),
});
```

**Rationale**:
- Type-safe validation (TypeScript types inferred from schema)
- Runtime validation prevents invalid data
- Clear error messages
- Single source of truth for validation rules
- Industry standard for Next.js/TypeScript projects

**Implementation**:
```typescript
// Server Action with Zod validation
const validated = createTaskSchema.parse({ title });
```

#### 2. Optimistic UI Updates
**Hook**: `useOptimistic` (React 19 feature)

**Pattern**:
```typescript
const [optimisticTasks, setOptimisticTasks] = useOptimistic(
  initialTasks,
  (state, action) => {
    // Update UI immediately
    // Server catches up in background
  }
);
```

**Rationale**:
- Instant UI feedback (no waiting for server)
- Better perceived performance
- Automatic rollback on error
- Modern React pattern for mutations

#### 3. Database Layer: In-Memory
**Implementation**: JavaScript array with async delays

**Functions**:
- `getTasks()`: Fetch all tasks (1s delay)
- `addTask(title)`: Create new task with UUID
- `toggleTask(id)`: Toggle completion status
- `deleteTask(id)`: Remove task

**Rationale**:
- Focus on architecture, not database setup
- Easy to replace with real DB (Postgres, MongoDB, etc.)
- Simulates network latency (realistic testing)
- UUID generation with `crypto.randomUUID()`

#### 4. Server Actions for Mutations
**Actions**: `addTaskAction`, `toggleTaskAction`, `deleteTaskAction`

**Pattern**:
```typescript
'use server';

export async function addTaskAction(formData: FormData) {
  // 1. Validate with Zod
  // 2. Call DB function
  // 3. Revalidate path
  // 4. Return result
}
```

**Rationale**:
- Type-safe mutations from client to server
- Automatic revalidation with `revalidatePath('/tasks')`
- Error handling with try/catch
- Progressive enhancement (works without JS)

#### 5. Filter System
**Filters**: All / Active / Completed

**Implementation**:
```typescript
const filteredTasks = optimisticTasks.filter(task => {
  if (filter === 'active') return !task.completed;
  if (filter === 'completed') return task.completed;
  return true;
});
```

**Rationale**:
- Client-side filtering (instant, no network)
- Live count updates
- Clear visual feedback
- Standard task management UX

#### 6. Form Handling with useTransition
**Hook**: `useTransition` for async state management

**Pattern**:
```typescript
const [isPending, startTransition] = useTransition();

const handleSubmit = async (formData: FormData) => {
  startTransition(async () => {
    const result = await addTaskAction(formData);
    if (result.success) formRef.current?.reset();
  });
};
```

**Rationale**:
- Non-blocking UI updates
- Loading states (`isPending`)
- Form reset after success
- Better than manual loading state management

### Component Design Patterns

#### TaskForm (Client Component)
**Responsibilities**:
- Capture user input
- Show loading state during submission
- Clear form on success
- Handle validation errors

**Key Features**:
- Native HTML form with `action` prop
- Disabled state during submission
- HTML5 validation (required, minLength, maxLength)
- Visual feedback with loading text

#### TaskList (Client Component)
**Responsibilities**:
- Display filtered tasks
- Handle toggle/delete actions
- Manage optimistic updates
- Show empty states

**Key Features**:
- Filter buttons with counts
- Checkbox toggle with visual feedback
- Delete button with confirmation
- Strikethrough for completed tasks
- Reuses Card components from design system

### Testing Strategy

#### Test Files:
1. `db.test.ts`: Database layer (4 tests)
2. `TaskForm.test.tsx`: Form component (5 tests)
3. `TaskList.test.tsx`: List component (10 tests)

#### Coverage Achieved:
- **TaskForm.tsx**: 95.83%
- **TaskList.tsx**: 99.31%
- **db.ts**: 100%
- **Overall Tasks Module**: 98%+

#### Testing Patterns:
- Mock Server Actions with `jest.mock()`
- Test user interactions with `fireEvent`
- Test async updates with `waitFor`
- Test optimistic UI updates
- Test filter logic
- Test empty states
- Test loading states

### User Experience Features

#### Loading States:
- Form shows "⏳ Adding..." during submission
- Disabled inputs prevent double-submission
- Loading skeleton in `loading.tsx`

#### Empty States:
- "🎉 No tasks yet! Add one above." (all filter)
- "✅ No active tasks!" (active filter)
- "📋 No completed tasks yet." (completed filter)

#### Visual Feedback:
- Completed tasks: strikethrough + green checkbox
- Active tasks: highlighted card variant
- Hover effects on buttons
- Smooth transitions

#### Error Handling:
- `error.tsx` boundary catches runtime errors
- Alert dialog for form errors
- Try again button in error boundary

## Consequences

### Positive
- **Complete learning example**: Covers all major Next.js patterns
- **High test coverage**: 98%+ gives confidence in refactoring
- **Type safety**: Zod + TypeScript prevent runtime errors
- **Great UX**: Optimistic updates feel instant
- **Reusable patterns**: Can copy for other features
- **Production-ready architecture**: Easy to extend with real DB

### Negative
- **In-memory DB**: Data lost on server restart (acceptable for learning)
- **No persistence**: Need real database for production
- **Basic features**: No edit, priority, or due dates
- **Client-side heavy**: TaskList is a Client Component (could optimize)

### Neutral
- **useOptimistic**: Requires React 19 (Next.js 15 includes it)
- **Zod bundle size**: ~14KB (acceptable for validation)
- **UUID generation**: Uses `crypto.randomUUID()` (requires Node 16+)

## Alternatives Considered

### 1. React Hook Form + Yup for Validation
**Pros**: Popular combination, good DX
**Cons**: More dependencies, Zod has better TypeScript integration
**Decision**: Zod is simpler and more modern

### 2. TanStack Query for Data Fetching
**Pros**: Advanced caching, optimistic updates built-in
**Cons**: Overkill for simple CRUD, adds complexity
**Decision**: Native Next.js patterns sufficient

### 3. Server Component for TaskList
**Pros**: Better performance, less JS to client
**Cons**: Can't use optimistic updates, worse UX
**Decision**: UX wins, optimistic updates worth the trade-off

### 4. Real Database (Postgres + Prisma)
**Pros**: Persistent data, production-ready
**Cons**: Complex setup, not focus of learning
**Decision**: In-memory DB for now, easy to migrate later

## Future Enhancements

### Short-term (Easy to add):
- Edit task functionality
- Drag-and-drop reordering
- Keyboard shortcuts
- Local storage persistence

### Medium-term:
- Due dates with calendar picker
- Priority levels (high/medium/low)
- Categories/tags
- Search functionality

### Long-term:
- Real database (Postgres/Vercel Postgres)
- User authentication (NextAuth.js)
- Multi-user support
- Real-time updates (WebSockets/Server-Sent Events)

## Migration Path to Production

### Step 1: Add Database
```typescript
// Replace db.ts with:
import { db } from '@/lib/prisma';

export async function getTasks() {
  return await db.task.findMany();
}
```

### Step 2: Add Authentication
```typescript
// Add to Server Actions:
import { auth } from '@/lib/auth';

export async function addTaskAction(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');
  // ... rest of logic
}
```

### Step 3: Add API Routes (Optional)
```typescript
// app/api/tasks/route.ts
export async function GET() {
  const tasks = await getTasks();
  return Response.json(tasks);
}
```

## Notes
- All code uses TypeScript strict mode
- All components tested with React Testing Library
- Follows Next.js 15 App Router conventions
- Uses Tailwind CSS for styling
- Reuses Card components from ADR 0003

## Related
- ADR 0002: Server Components vs Client Components
- ADR 0003: Tailwind CSS with CVA for Design System
- ADR 0005: Testing Strategy for Next.js App Router

## References
- [Zod Documentation](https://zod.dev/)
- [React useOptimistic Hook](https://react.dev/reference/react/useOptimistic)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Next.js Form Best Practices](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations)
