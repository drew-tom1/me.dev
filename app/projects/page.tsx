import { projects } from "./project-info/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="relative rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
      <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg text-black dark:bg-zinc-900 dark:text-cyan-200">
        🚧 all projects
      </div>
      <ul className="mt-2 space-y-3">
        {projects.map((project) => (
          <li key={project.slug} className="group rounded-md transition hover:bg-[var(--cream-hover)] dark:hover:bg-gray-800/50">
            <Link
              href={`/projects/${project.slug}`}
              className="flex cursor-pointer items-start justify-between p-2"
            >
              <div>
                <span className="font-medium text-black hover:underline dark:text-gray-100">
                  {project.name}
                </span>
                <p className="text-sm text-stone-600 dark:text-gray-400">{project.description}</p>
              </div>
              <span className="text-black transition group-hover:translate-x-1 dark:text-gray-100">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
