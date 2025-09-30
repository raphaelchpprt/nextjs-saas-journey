import { Suspense } from 'react';
import InteractiveWidget from './components/InteractiveWidget';
import { ServerStats } from './components/ServerStats';
import { getStats } from './db';

export default async function DashboardPage() {
  const stats = await getStats();

  return (
    <main className="flex h-[calc(100vh-64px)] flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="w-full max-w-4xl space-y-8">
        <Suspense
          fallback={<div className="animate-pulse bg-gray-300 h-32 rounded" />}
        >
          <ServerStats stats={stats} />
        </Suspense>
        <InteractiveWidget initialCount={stats.tasks} />
      </div>
    </main>
  );
}
