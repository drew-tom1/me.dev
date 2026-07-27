import Image from "next/image";
import { notFound } from "next/navigation";
import { photos } from "../photo-info/photos";

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function PhotoDetailPage(props: Props) {
  const params = await props.params;
  const photo = photos.find((p) => p.slug === params.slug);

  if (!photo) return notFound();

  return (
    <div className="relative space-y-4 rounded-lg border border-[var(--cream-border)] p-4 dark:border-gray-700">
      <div className="absolute -top-4 left-4 bg-[var(--cream-bg)] px-2 text-lg font-semibold dark:bg-zinc-900">
        <span className="text-[var(--text-fg)] dark:text-cyan-200">📷 </span>
        <span className="text-[var(--text-fg)]">{photo.title}</span>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden rounded-md">
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
          priority
        />
      </div>

      <div className="space-y-1">
        <p className="text-sm text-stone-600 dark:text-gray-400">
          {formatDate(photo.takenAt)}
          {photo.location ? ` · ${photo.location}` : ""}
        </p>
        <p className="leading-relaxed text-stone-700 dark:text-gray-300">{photo.caption}</p>
      </div>
    </div>
  );
}
