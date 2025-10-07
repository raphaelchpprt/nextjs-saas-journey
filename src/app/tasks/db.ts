import { Task } from './types';

/*
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

export async function getTasks(): Promise<Task[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [...tasks];
}

export async function addTask(
  title: string,
  completed: boolean,
  createdAt: Date
): Promise<Task> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    completed,
    createdAt,
  };
  tasks.push(newTask);
  return newTask;
}

export async function toggleTask(id: string): Promise<Task> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const task = tasks.find((task) => task.id === id);
  if (!task) throw new Error('Task not found');
  task.completed = !task.completed;
  return task;
}

export async function deleteTask(id: string): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const task = tasks.find((task) => task.id === id);
  if (!task) throw new Error('Task not found');
  tasks = tasks.filter((task) => task.id !== id);
  return true;
}
