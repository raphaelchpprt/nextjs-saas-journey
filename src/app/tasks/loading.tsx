export default function TasksLoading() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">📝 Task Manager</h1>

        <div className="space-y-6">
          {/* Form skeleton */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-6 animate-pulse">
            <div className="h-12 bg-gray-700 rounded"></div>
          </div>

          {/* Tasks skeleton */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-4 animate-pulse">
              <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
