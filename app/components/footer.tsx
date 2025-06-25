import { ArrowIcon } from '../helper-ui/arrow-icon';

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-red-400 dark:hover:text-cyan-300 hover:scale-105"
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
            className="flex items-center transition-all hover:text-red-400 dark:hover:text-cyan-300 hover:scale-105"
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
            className="flex items-center transition-all hover:text-red-400 dark:hover:text-cyan-300 hover:scale-105"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:drew.tom@sjsu.edu"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">email</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Drew Tom. All rights reserved.
      </p>
    </footer>
  );
}
