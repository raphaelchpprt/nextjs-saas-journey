import { z } from 'zod';

/**
 * Task entity interface
 */
export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

/**
 * Zod schema for task validation
 * TODO: Add validation rules:
 * - title: string, min 1 char, max 200 chars, required
 * - completed: boolean, optional (default: false)
 */
export const createTaskSchema = z.object({
  // TODO: Add your schema here
  title: z.string(),
});

/**
 * Infer TypeScript type from Zod schema
 */
export type CreateTaskInput = z.infer<typeof createTaskSchema>;

/**
 * Filter options for tasks
 */
export type TaskFilter = 'all' | 'active' | 'completed';
