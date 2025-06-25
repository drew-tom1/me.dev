import Router from "next/router";

export const metadata = {
  title: "Projects",
  description: "Some projects I've done!",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-6 tracking-tighter">
        my projects!
      </h1>
      <hr className="border-gray-700 mb-4" />
    </section>
  );
}
  