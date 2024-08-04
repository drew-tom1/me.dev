import { BlogPosts } from "app/components/posts";
import { Typewriter } from "nextjs-simple-typewriter";

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
      <hr />
      <p className="my-4">
        {`I'm a second year at San Jose State University studying cybersecurity and software engineering.
        I'm a part of some clubs on campus including SJSU's `}
        <a href="https://www.sce.sjsu.edu/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 dark:text-cyan-200 hover:underline">Software and Computer Engineering Society</a>
        {`. I love learning about new things. In my free time, I love playing with my cats, learning about investments, or nerding out over Warhammer 40,000!`}
      </p>
      <div className="my-4">
        <BlogPosts />
      </div>
    </section>
  );
}
