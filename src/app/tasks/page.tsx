import { Suspense } from 'react';
import { getTasks } from './db';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <main className="min-h-[calc(100vh-64px)] pb-10 bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">📝 Task Manager</h1>

        <div className="mb-8">
          <TaskForm />
        </div>

        <Suspense
          fallback={<div className="animate-pulse">Loading tasks...</div>}
        >
          <TaskList initialTasks={tasks} />
        </Suspense>
      </div>
    </main>
  );
}
