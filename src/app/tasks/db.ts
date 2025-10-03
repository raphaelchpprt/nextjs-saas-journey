import { Task } from './types';

/**
 * In-memory database for tasks
 * In production, this would be replaced with a real database (Postgres, MongoDB, etc.)
 */
let tasks: Task[] = [
  {
    id: '1',
    title: 'Learn Next.js Server Actions',
    completed: true,
    createdAt: new Date('2025-10-01'),
  },
  {
    id: '2',
    title: 'Build a Task Manager',
    completed: false,
    createdAt: new Date('2025-10-03'),
  },
  {
    id: '3',
    title: 'Master TypeScript and Zod',
    completed: false,
    createdAt: new Date('2025-10-03'),
  },
];

/**
 * Get all tasks
 * TODO: Add delay to simulate network latency (for testing loading states)
 */
export async function getTasks(): Promise<Task[]> {
  // TODO: Add await new Promise(resolve => setTimeout(resolve, 500));
  return [...tasks];
}

/**
 * Add a new task
 * TODO:
 * - Generate unique ID (use crypto.randomUUID())
 * - Create task with title, completed: false, createdAt: new Date()
 * - Add to tasks array
 * - Return the new task
 */
export async function addTask(title: string): Promise<Task> {
  // TODO: Implement this function
  throw new Error('Not implemented');
}

/**
 * Toggle task completion status
 * TODO:
 * - Find task by id
 * - Toggle completed status
 * - Return updated task (or throw if not found)
 */
export async function toggleTask(id: string): Promise<Task> {
  // TODO: Implement this function
  throw new Error('Not implemented');
}

/**
 * Delete a task
 * TODO:
 * - Remove task from array
 * - Return true if deleted, false if not found
 */
export async function deleteTask(id: string): Promise<boolean> {
  // TODO: Implement this function
  throw new Error('Not implemented');
}
