"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

const navItems = {
  '/': {
    name: 'home',
  },
  '/photos': {
    name: 'photos',
  },
  '/experience': {
    name: 'experience',
  },
  '/projects': {
    name: 'projects',
  },
  '/contact': {
    name: 'contact',
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center space-x-0 rounded-lg border border-[var(--cream-border)] pr-0.5 text-[var(--text-fg)] dark:border-gray-700">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;
              const linkClass = `rounded-md transition-colors hover:bg-[var(--cream-hover)] dark:hover:bg-gray-800/80 flex align-middle relative py-1 px-2 m-1 ${isActive ? "bg-[var(--cream-hover)] dark:bg-gray-800/80" : ""}`;

              return (
                <Link
                  key={path}
                  href={path}
                  className={linkClass}
                >
                  {name}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
