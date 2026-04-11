import { BlogPosts } from "app/components/posts";
import { Typewriter } from "nextjs-simple-typewriter";
import { projects } from "./projects/project-info/projects";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex gap-4">
      <div className="flex-1 space-y-6">
        <div className="relative rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
          <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg text-black dark:bg-zinc-900 dark:text-cyan-200">
            👋
            <Typewriter
              words={["hi, i'm drew!"]}
              cursor
              cursorBlinking
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <ul style={{ listStyleType: 'disc', paddingLeft: '10px' }} className="m-2">
            <li>third-year student at san jose state university</li>
            <li>majoring in network engineering, double minor in business and computer science</li>
            <li>i work heavily with typescript, python, and java</li>
          </ul>
        </div>

        <div className="relative rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
          <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg text-black dark:bg-zinc-900 dark:text-cyan-200">
            🚧projects
          </div>
          <ul className="mt-2 space-y-3">
            {projects.map((project) => (
              <li key={project.slug} className="group rounded-md transition hover:bg-[var(--cream-hover)] dark:hover:bg-gray-800/50">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex justify-between items-start p-2 cursor-pointer"
                >
                  <div>
                    <span className="font-medium text-black hover:underline dark:text-gray-100">{project.name}</span>
                    <p className="text-sm text-stone-600 dark:text-gray-400">{project.description}</p>
                  </div>
                  <span className="text-black transition group-hover:translate-x-1 dark:text-gray-100">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
          <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg text-black dark:bg-zinc-900 dark:text-cyan-200">
            📜blogs
          </div>
          <BlogPosts />
        </div>
      </div>

      <div className="w-80 flex flex-col gap-4">
        <div className="relative rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
          <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg text-black dark:bg-zinc-900 dark:text-cyan-200">
            i'm currently...
          </div>
          <ul style={{ listStyleType: 'disc', paddingLeft: '10px' }}>
            <li>president @ sjsu theta tau</li>
            <li>software engineering intern @ capital one</li>
          </ul>
        </div>
        
        <div className="relative flex h-full flex-col gap-3 rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
          <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg text-black dark:bg-zinc-900 dark:text-cyan-200">
            🎨hobbies
          </div>

          <div className="flex-1 rounded-md border border-[var(--cream-border)] bg-[var(--cream-surface)] p-3 dark:border-gray-700 dark:bg-gray-800/50">
            <h3 className="font-medium text-stone-900 dark:text-gray-100">🏂 Snowboarding</h3>
            <p className="text-sm text-stone-600 dark:text-gray-400">I've had the chance to snowboard all around California. No other feeling than carving through fresh powder!</p>
            <ul className="mt-2 list-inside list-disc text-sm text-stone-600 dark:text-gray-400">
              <li>Salomon Assassin All-Mountain</li>
              <li>Salomon Pact Bindings</li>
              <li>ThirtyTwo Shifty Boas</li>
            </ul>
          </div>  

          <div className="flex flex-1 flex-col rounded-md border border-[var(--cream-border)] bg-[var(--cream-surface)] p-3 dark:border-gray-700 dark:bg-gray-800/50">
            <h3 className="font-medium text-stone-900 dark:text-gray-100">📚 Reading</h3>
            <p className="mb-2 text-sm text-stone-600 dark:text-gray-400">I got into the setting of Warhamemr 40,000 a little over a year ago, and it's an amazing setting.</p>
            <ul className="list-inside list-disc text-sm text-stone-600 dark:text-gray-400">
              <li>Horus Heresy Series</li>
              <li>Helsreach Series</li>
              <li>Dark Imperium Series</li>
            </ul>
          </div>

          <div className="flex-1 rounded-md border border-[var(--cream-border)] bg-[var(--cream-surface)] p-3 dark:border-gray-700 dark:bg-gray-800/50">
            <h3 className="font-medium text-stone-900 dark:text-gray-100">🎮 Gaming</h3>
            <p className="text-sm text-stone-600 dark:text-gray-400">I've played games since I was a child, absolute best way to unwind.</p>
            <ul className="mt-2 list-inside list-disc text-sm text-stone-600 dark:text-gray-400">
              <li>Total War: Warhammer I-III</li>
              <li>Marvel Rivals</li>
              <li>Starcraft 2</li>
              <li>WH40k: Space Marine 2</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
