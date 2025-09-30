export const revalidate = 3600; // Revalidate every hour

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="mt-4 text-lg">
        This is the journey of learning Next.js, TypeScript, and Tailwind.
      </p>
    </main>
  );
};

export default About;
