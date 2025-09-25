import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold hover:text-cyan-400">
          Home
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-cyan-400">
            About
          </Link>
          <Link href="/pricing" className="hover:text-cyan-400">
            Pricing
          </Link>
        </div>
      </nav>
    </header>
  );
};
