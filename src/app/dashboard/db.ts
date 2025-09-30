// src/app/dashboard/db.ts
// Simulated in-memory database (not persistent across server restarts)

const currentStats = {
  users: Math.floor(Math.random() * 1000) + 100,
  revenue: `$${(Math.random() * 10000).toFixed(2)}`,
  tasks: Math.floor(Math.random() * 100) + 10,
};

export async function getStats() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { ...currentStats };
}

export async function updateTasks(newTasksValue: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  currentStats.tasks = newTasksValue;
  console.log('DB Updated:', currentStats);
  return { ...currentStats };
}
