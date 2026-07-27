import Image from "next/image";
import Link from "next/link";
import { photos } from "app/photos/photo-info/photos";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function Photos({ limit }: { limit?: number }) {
  const displayedPhotos = limit ? photos.slice(0, limit) : photos;

  if (displayedPhotos.length === 0) {
    return (
      <p className="mt-2 text-sm text-stone-600 dark:text-gray-400">
        photos coming soon.
      </p>
    );
  }

  return (
    <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-3">
      {displayedPhotos.map((photo) => (
        <Link
          key={photo.slug}
          href={`/photos/${photo.slug}`}
          className="group overflow-hidden rounded-md border border-[var(--cream-border)] transition hover:bg-[var(--cream-hover)] dark:border-gray-700 dark:hover:bg-gray-800/50"
        >
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="space-y-0.5 p-2">
            <p className="text-sm font-medium text-[var(--text-fg)]">{photo.title}</p>
            <p className="text-xs text-stone-600 dark:text-gray-400">
              {formatDate(photo.takenAt)}
              {photo.location ? ` · ${photo.location}` : ""}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
