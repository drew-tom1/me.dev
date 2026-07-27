import { StaticImageData } from "next/image";

export type Photo = {
  slug: string;
  title: string;
  caption: string;
  src: StaticImageData;
  takenAt: string;
  location?: string;
};

export const photos: Photo[] = [];
