import { HorizontalArrowIcon } from "../helper-ui/horizontal-arrow";

export const metadata = {
  title: "Contact",
  description: "Contact Information",
};

export default function Page() {
  return (
    <section>
      <div className="relative rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
        <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg text-black dark:bg-zinc-900 dark:text-cyan-200">
          📱socials & more
        </div>
        <ul className="mt-4 list-none space-y-4">
          <li className="flex items-center">
            <span className="text-black dark:text-gray-100">LinkedIn</span>
            <HorizontalArrowIcon />
            <a
              href="https://www.linkedin.com/in/drew-tom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline-offset-2 transition-colors duration-300 hover:underline dark:text-gray-100"
            >
              in/drew-tom
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-black dark:text-gray-100">GitHub</span>
            <HorizontalArrowIcon />
            <a
              href="https://github.com/drew-tom1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline-offset-2 transition-colors duration-300 hover:underline dark:text-gray-100"
            >
              drew-tom1
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-black dark:text-gray-100">Email</span>
            <HorizontalArrowIcon />
            <a
              href="mailto:drew.tom@sjsu.edu"
              className="text-black underline-offset-2 transition-colors duration-300 hover:underline dark:text-gray-100"
            >
              drew.tom@sjsu.edu
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
