import { BlogPosts } from "app/components/posts";
import { Typewriter } from "nextjs-simple-typewriter";
import "./global.css";
import { projects } from "./projects/project-info/projects";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex gap-4">
      <div className="flex-1 space-y-6">
        <div className="relative border border-gray-700 rounded-lg p-4">
          <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
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

        <div className="relative border border-gray-700 rounded-lg p-4">
          <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
            🚧projects
          </div>
          <ul className="mt-2 space-y-3">
            {projects.map((project) => (
              <li key={project.slug} className="group rounded-md hover:bg-gray-800/50 transition">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex justify-between items-start p-2 cursor-pointer"
                >
                  <div>
                    <span className="text-white font-medium hover:underline">{project.name}</span>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </div>
                  <span className="text-cyan-200 group-hover:translate-x-1 transition">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative border border-gray-700 rounded-lg p-4">
          <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
            📜blogs
          </div>
          <BlogPosts />
        </div>
      </div>

      <div className="w-80 flex flex-col gap-4">
        <div className="relative border border-gray-700 rounded-lg p-4">
          <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
            i'm currently...
          </div>
          <ul style={{ listStyleType: 'disc', paddingLeft: '10px' }}>
            <li>treasurer @ sjsu theta tau</li>
            <li>dev team @ sjsu sce</li>
            <li>software engineering intern @ usaa</li>
          </ul>
        </div>
        
        <div className="relative border border-gray-700 rounded-lg p-4 flex flex-col gap-3 h-full">
          <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
            🎨hobbies
          </div>

          <div className="flex-1 border border-gray-700 rounded-md p-3 bg-gray-800/50">
            <h3 className="text-white font-medium">🏂 Snowboarding</h3>
            <p className="text-gray-400 text-sm">I've had the chance to snowboard all around California. </p>
            <ul className="mt-2 text-gray-400 list-disc list-inside text-sm">
              <li>Salomon Assassin All-Mountain</li>
              <li>Salomon Pact Bindings</li>
              <li>ThirtyTwo Shifty Boas</li>
            </ul>
          </div>  

          <div className="flex-1 border border-gray-700 rounded-md p-3 bg-gray-800/50 flex flex-col">
            <h3 className="text-white font-medium">📚 Reading</h3>
            <p className="text-gray-400 text-sm mb-2">I got into the setting of Warhamemr 40,000 a little over a year ago, and it's an amazing setting.</p>
            <ul className="text-gray-400 list-disc list-inside text-sm">
              <li>Horus Heresy Series</li>
              <li>Helsreach Series</li>
              <li>Dark Imperium Series</li>
            </ul>
          </div>

          <div className="flex-1 border border-gray-700 rounded-md p-3 bg-gray-800/50">
            <h3 className="text-white font-medium">🎮 Gaming</h3>
            <p className="text-gray-400 text-sm">I've played games since I was a child, absolute best way to unwind.</p>
            <ul className="mt-2 text-gray-400 list-disc list-inside text-sm">
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
