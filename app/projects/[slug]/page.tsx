import { projects } from "../project-info/projects";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage(props: Props) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="relative space-y-4 rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
      <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg font-semibold dark:bg-zinc-900">
        <span className="text-black dark:text-cyan-200">📁 </span>
        <span className="text-black dark:text-gray-100">{project.name}</span>
      </div>

      <p className="italic text-stone-600 dark:text-gray-400">{project.description}</p>

      <div className="whitespace-pre-wrap leading-relaxed text-stone-700 dark:text-gray-300">
        {project.content}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline-offset-2 hover:underline dark:text-gray-100"
          >
            GitHub Repo
          </a>
        )}
      </div>

      <div>
        <ul className="flex flex-wrap gap-3 text-black dark:text-gray-200">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded whitespace-nowrap bg-[var(--cream-surface)] px-3 py-1 dark:bg-gray-800"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
