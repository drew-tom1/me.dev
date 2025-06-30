import projects from "./project-info/project-info.json"

export const metadata = {
  title: "Projects",
  description: "Some projects I've done!",
};

export default function ProjectOverviewPage() {
  return (
    <section>
      <div className="relative border border-gray-700 rounded-lg p-4">
        <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
        my projects!
        </div>
      </div>
    </section>
  );
}
  