import { ArrowIcon } from '../helper-ui/arrow-icon';

export default function Footer() {
  return (
    <footer className="mt-6">
      <div className="relative inline-flex rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
        <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg text-black dark:bg-zinc-900 dark:text-cyan-200">
          📨contact links
        </div>
        <ul className="font-sm mt-1 inline-flex flex-col space-x-0 space-y-2 text-black md:flex-row md:space-x-4 md:space-y-0 dark:text-gray-100">
          <li>
            <a
              className="flex items-center transition-all hover:scale-105 hover:underline hover:underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/drew-tom/"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">linkedin</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:scale-105 hover:underline hover:underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/drew-tom1"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">github</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:scale-105 hover:underline hover:underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:drew.tom@sjsu.edu"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">email</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:scale-105 hover:underline hover:underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:drew.tom@sjsu.edu"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">resume</p>
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-8 text-black dark:text-gray-100">
        © {new Date().getFullYear()} Drew Tom. All rights reserved.
      </p>
    </footer>
  );
}
