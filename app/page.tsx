import { BlogPosts } from "app/components/posts";
import { Typewriter } from "nextjs-simple-typewriter";
import "./global.css";

export default function Page() {
  return (
    <section>
      <h1 className="mb-6 text-4xl font-semibold tracking-tighter">
        <Typewriter
          words={["hi, i'm drew!"]}
          cursor
          cursorBlinking
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <hr className="border-gray-700 mb-4" />
      <p className="my-4">
        {`I'm a second year at San Jose State University studying cybersecurity and software engineering.
        I'm involved in some organizations on campus including SJSU's `}
        <a href="https://sce.sjsu.edu/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 dark:text-cyan-200">Software and Computer Engineering Society</a>
        {`. I love learning about new things. In my free time, I love playing with my cats, learning about investments, or nerding out over Warhammer 40,000!`}
      </p>
      <p className="my-4">Contact me for my full resume!</p>
      <div className="my-4">
        <BlogPosts />
      </div>
    </section>
  );
}
