import { HorizontalArrowIcon } from "../helper-ui/horizontal-arrow";

export const metadata = {
  title: "Contact",
  description: "Contact Information",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-6 tracking-tighter">
        let's chat!
      </h1>
      <hr className="border-gray-700 mb-4" />
      <ul className="list-none space-y-4 mt-4">
        <li className="flex items-center">
          <span className="dark:text-white">LinkedIn</span>
          <HorizontalArrowIcon />
          <a
            href="https://www.linkedin.com/in/drew-tom"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-white hover:text-red-400 duration-300 dark:hover:text-cyan-300"
          >
            in/drew-tom
          </a>
        </li>
        <li className="flex items-center">
          <span className="dark:text-white">GitHub</span>
          <HorizontalArrowIcon />
          <a
            href="https://github.com/drew-tom1"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-white hover:text-red-400 duration-300 dark:hover:text-cyan-300"
          >
            drew-tom1
          </a>
        </li>
        <li className="flex items-center">
          <span className="dark:text-white">Email</span>
          <HorizontalArrowIcon />
          <a
            href="mailto:drew.tom@sjsu.edu"
            className="dark:text-white hover:text-red-400 duration-300 dark:hover:text-cyan-300"
          >
            drew.tom@sjsu.edu
          </a>
        </li>
      </ul>
    </section>
  );
}
