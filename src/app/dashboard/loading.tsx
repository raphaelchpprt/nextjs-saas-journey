export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-8 bg-gray-300/70 animate-pulse rounded-xl w-1/3 h-10"></h1>
      <div className="w-full max-w-4xl space-y-8">
        <div className="bg-gray-300/70 animate-pulse rounded-xl h-32"></div>
        <div className="bg-gray-300/70 animate-pulse rounded-xl h-48"></div>
      </div>
    </main>
  );
}
