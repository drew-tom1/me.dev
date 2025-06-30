import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog📈.",
};

export default function Page() {
  return (
    <section>
      <div className="relative border border-gray-700 rounded-lg p-4">
        <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
          📈stocks
        </div>
        <BlogPosts />
      </div>
    </section>
  );
}
