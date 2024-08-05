import Highlights from "app/components/highlights";
import "../global.css";

export const metadata = {
  title: "about",
  description: "A little about my experiences and hobbies",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-6 tracking-tighter">
        a little (more) about me!
      </h1>
      <hr className="border-gray-700 mb-6" />
      <div className="relative border border-gray-700 rounded-lg p-4">
        <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
          💼 work experience
        </div>
        <Highlights />
      </div>
    </section>
  );
}