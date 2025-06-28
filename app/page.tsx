import { BlogPosts } from "app/components/posts";
import { Typewriter } from "nextjs-simple-typewriter";
import "./global.css";

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
        </div>

        <div className="relative border border-gray-700 rounded-lg p-4">
          <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
            📜blogs
          </div>
          <BlogPosts />
        </div>
      </div>

      <div className="w-80 flex flex-col gap-4">
        {/* Top two horizontal boxes */}
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
        
        {/* Bottom long vertical box (fills rest of height) */}
        <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg p-2" />
      </div>
    </div>
  );
}
