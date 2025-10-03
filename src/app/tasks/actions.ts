'use server';

import { revalidatePath } from 'next/cache';
import {
  addTask as dbAddTask,
  toggleTask as dbToggleTask,
  deleteTask as dbDeleteTask,
} from './db';
import { createTaskSchema } from './types';

/**
 * Server Action: Add a new task
 * TODO:
 * 1. Validate input with Zod (createTaskSchema.parse)
 * 2. Call dbAddTask with validated title
 * 3. Revalidate /tasks path
 * 4. Return success response with new task
 * 5. Handle errors (return error response)
 */
export async function addTaskAction(formData: FormData) {
  try {
    // TODO: Implement validation and logic
    const title = formData.get('title') as string;

    // Validation example:
    // const validated = createTaskSchema.parse({ title });

    // TODO: Call dbAddTask and revalidate

    return {
      success: false,
      error: 'Not implemented yet',
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Server Action: Toggle task completion
 * TODO:
 * 1. Call dbToggleTask
 * 2. Revalidate /tasks path
 * 3. Return success response
 */
export async function toggleTaskAction(id: string) {
  try {
    // TODO: Implement this
    throw new Error('Not implemented');
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Server Action: Delete a task
 * TODO:
 * 1. Call dbDeleteTask
 * 2. Revalidate /tasks path
 * 3. Return success response
 */
export async function deleteTaskAction(id: string) {
  try {
    // TODO: Implement this
    throw new Error('Not implemented');
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
