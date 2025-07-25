import { projects } from "./project-info/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <fieldset className="relative border border-gray-700 rounded-lg p-4">
      <legend className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
        🚧 all projects
      </legend>
      <ul className="mt-2 space-y-3">
        {projects.map((project) => (
          <li key={project.slug} className="group rounded-md hover:bg-gray-800/50 transition">
            <Link
              href={`/projects/${project.slug}`}
              className="flex justify-between items-start p-2 cursor-pointer"
            >
              <div>
                <span className="text-white font-medium hover:underline">
                  {project.name}
                </span>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
              <span className="text-cyan-200 group-hover:translate-x-1 transition">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
