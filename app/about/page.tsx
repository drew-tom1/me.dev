import Timeline from "app/components/timeline";
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
      <hr />
      <div className="rounded-lg border-color-white p-4 transition-all duration-300">
        <h3 className="my-2 text-xl font-medium">work</h3>
        <Timeline />
      </div>
    </section>
  );
}