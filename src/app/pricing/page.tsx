import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Explore our pricing plans and choose the one that fits your needs.',
};

export const revalidate = 3600; // Revalidate every hour

const Pricing = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Our Pricing
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          {String(metadata.description)}
        </p>
        <div className="pt-8">
          <p className="text-yellow-400">
            [Pricing cards will be implemented here soon]
          </p>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
