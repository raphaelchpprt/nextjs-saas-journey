'use client';

export default function TasksError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            ⚠️ Something went wrong!
          </h2>
          <p className="text-gray-300 mb-6">{error.message}</p>
          <button
            onClick={reset}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}
