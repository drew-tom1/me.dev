import Highlights from "app/components/highlights";
import "../global.css";
import { hobbyItems, projectItems, resumeItems } from "./items";


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
        <div className="absolute -top-4 left-4 dark:bg-zinc-900 bg-stone-200 px-2 text-lg text-red-400 dark:text-cyan-300">
          💼 work experience
        </div>
        <Highlights highlightItems={resumeItems}/>
      </div>
      <div className="relative border border-gray-700 rounded-lg p-4 my-6">
        <div className="absolute -top-4 left-4 dark:bg-zinc-900 bg-stone-200 px-2 text-lg text-red-400 dark:text-cyan-300">
          ⚙️ projects
        </div>
        <Highlights highlightItems={projectItems}/>
      </div>
      <div className="relative border border-gray-700 rounded-lg p-4">
        <div className="absolute -top-4 left-4 dark:bg-zinc-900 bg-stone-200 px-2 text-lg text-red-400 dark:text-cyan-300">
          🧙‍♂️ hobbies
        </div>
        <Highlights highlightItems={hobbyItems}/>
      </div>
    </section>
  );
}