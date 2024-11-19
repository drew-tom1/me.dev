"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
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
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;
              const linkClass = `transition-all hover:text-red-400 dark:hover:text-cyan-300 hover:scale-105 flex align-middle relative py-1 px-2 m-1 ${isActive ? 'scale-110 text-red-400 dark:text-cyan-300' : ''}`;

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
          </div>
        </nav>
      </div>
    </aside>
  );
}
