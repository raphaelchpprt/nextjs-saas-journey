// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface NavItem {
  href: string;
  label: string;
  isHome?: boolean;
}

export const Header: FC = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { href: '/', label: 'Home', isHome: true },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
  ];

  const getLinkClasses = (item: NavItem) => {
    const isActive = pathname === item.href;
    const baseClasses = 'transition-colors';
    const homeClasses = item.isHome ? 'text-lg font-bold' : '';
    const activeClasses = isActive
      ? 'text-cyan-400 font-semibold'
      : 'hover:text-cyan-400';

    return `${baseClasses} ${homeClasses} ${activeClasses}`.trim();
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href={navItems[0].href} className={getLinkClasses(navItems[0])}>
          {navItems[0].label}
        </Link>
        <div className="space-x-4">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={getLinkClasses(item)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
