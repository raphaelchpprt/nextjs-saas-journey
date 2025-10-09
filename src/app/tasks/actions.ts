'use server';

import { revalidatePath } from 'next/cache';
import {
  addTask as dbAddTask,
  toggleTask as dbToggleTask,
  deleteTask as dbDeleteTask,
} from './db';
import { createTaskSchema } from './types';

export async function addTaskAction(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const validated = createTaskSchema.parse({ title });

    const newTask = await dbAddTask(validated.title);
    revalidatePath('/tasks');

    return {
      success: true,
      task: newTask,
      message: 'Task added successfully',
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function toggleTaskAction(id: string) {
  try {
    const updatedTask = await dbToggleTask(id);
    revalidatePath('/tasks');

    return {
      success: true,
      task: updatedTask,
      message: 'Task toggled successfully',
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function deleteTaskAction(id: string) {
  try {
    const deleted = await dbDeleteTask(id);
    revalidatePath('/tasks');

    return {
      success: deleted,
      message: deleted ? 'Task deleted successfully' : 'Task not found',
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
