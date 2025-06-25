import projects from "./project-info/project-info.json"

export const metadata = {
  title: "Projects",
  description: "Some projects I've done!",
};

export default function ProjectOverviewPage() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-6 tracking-tighter">
        my projects!
      </h1>
      <hr className="border-gray-700 mb-4" />
    </section>
  );
}
  