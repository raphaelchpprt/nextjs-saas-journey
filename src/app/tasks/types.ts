import { z } from 'zod';
export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export const createTaskSchema = z.object({
  title: z.string().min(1).max(200),
  completed: z.boolean().optional().default(false),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;

export type TaskFilter = 'all' | 'active' | 'completed';
