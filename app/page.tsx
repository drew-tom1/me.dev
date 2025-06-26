import { BlogPosts } from "app/components/posts";
import { Typewriter } from "nextjs-simple-typewriter";
import "./global.css";

export default function Page() {
  return (
    <div>
        <div className="inline-flex relative border border-gray-700 rounded-lg p-4">
          <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-300">
            👋
            <Typewriter
              words={[" hi, i'm drew!"]}
              cursor
              cursorBlinking
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <ul style={{ listStyleType: 'disc', paddingLeft: '10px'}} className="m-2">
            <li>third-year student at san jose state university</li>
            <li>majoring in network engineering, double minor in business and computer science</li>
            <li>current software engineering intern at usaa</li>
            <li>currently learning: golang</li>
            <li>treasurer @ sjsu theta tau, dev team @ sjsu sce</li>
          </ul>
      </div>
      <div className="flex relative border border-gray-700 rounded-lg p-4 mt-6">
        <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-300">
          📜blogs
        </div>
        <BlogPosts  />
      </div>
    </div>
  );
}
