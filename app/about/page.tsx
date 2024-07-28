export const metadata = {
  title: "about",
  description: "A little about my experiences",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-6 tracking-tighter">
        a little (more) about me!
      </h1>
      <hr />
      <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
        <svg
          className="h-8 w-8 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <h3 className="mt-2 text-lg font-medium">Software Engineering</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Proficient in a variety of programming languages and frameworks, with
          a focus on building scalable and efficient software solutions.
        </p>
      </div>
    </section>
  );
}
