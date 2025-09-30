export const revalidate = 3600; // Revalidate every hour

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-white via-blue-400 to-white-500 bg-clip-text text-transparent drop-shadow-lg">
          Day 1
        </h1>
        <p className="mt-4 text-2xl">
          My journey to master Next.js, TypeScript & Tailwind.
        </p>
      </div>
    </main>
  );
}
