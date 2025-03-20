export type GalleryCategory = "performances" | "workshops" | "backstage";
export type GalleryItemSize = "small" | "medium" | "large" | "wide" | "tall";

export interface GalleryItem {
  id: number;
  title: string;
  date: string;
  category: GalleryCategory;
  imageSrc: string;
  imageAlt: string;
  size?: GalleryItemSize;
}
