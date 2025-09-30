'use server';
import { revalidatePath } from 'next/cache';
import { updateTasks } from './db';

export async function syncTasksWithCount(newTasksValue: number) {
  console.log(
    `Server Action: Syncing tasks to ${newTasksValue} (from client count)`
  );

  const updatedStats = await updateTasks(newTasksValue);

  revalidatePath('/dashboard');

  return {
    success: true,
    stats: updatedStats,
    message: `Tasks synchronized to ${newTasksValue}`,
    timestamp: new Date().toISOString(),
  };
}
