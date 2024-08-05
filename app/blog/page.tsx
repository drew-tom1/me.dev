import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-6 tracking-tighter">
        writing about my investment journey!
      </h1>
      <hr className="border-gray-700 mb-6" />
      <BlogPosts />
    </section>
  );
}
