import { Photos } from "app/components/photos";

export const metadata = {
  title: "Photos",
  description: "A collection of photos.",
};

export default function Page() {
  return (
    <section>
      <div className="relative rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
        <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg text-[var(--text-fg)] dark:bg-zinc-900 dark:text-cyan-200">
          📷 photos
        </div>
        <Photos />
      </div>
    </section>
  );
}
