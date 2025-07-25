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
    <fieldset className="relative border border-gray-700 rounded-lg p-4 space-y-4">
      <legend className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200 font-semibold">
        📁 {project.name}
      </legend>

      <p className="text-gray-400 italic">{project.description}</p>

      <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
        {project.content}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-200 hover:underline"
          >
            GitHub Repo
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>

      <div>
        <ul className="flex flex-wrap gap-3 text-gray-300">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="bg-gray-800 px-3 py-1 rounded whitespace-nowrap"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

    </fieldset>
  );
}
