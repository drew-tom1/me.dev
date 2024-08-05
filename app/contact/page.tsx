function HorizontalArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-2"
    >
      <path
        d="M3 12H21M21 12L15 6M21 12L15 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
            className="dark:text-white hover:text-gray-600 dark:hover:text-cyan-200"
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
            className="dark:text-white hover:text-gray-600 dark:hover:text-cyan-200"
          >
            drew-tom1
          </a>
        </li>
        <li className="flex items-center">
          <span className="dark:text-white">Email</span>
          <HorizontalArrowIcon />
          <a
            href="mailto:drew.tom@sjsu.edu"
            className="dark:text-white hover:text-gray-600 dark:hover:text-cyan-200"
          >
            drew.tom@sjsu.edu
          </a>
        </li>
      </ul>
    </section>
  );
}
