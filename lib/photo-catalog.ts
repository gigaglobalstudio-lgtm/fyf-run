import photoCatalog from "./photo-catalog.json";
import { getProduct, type Product } from "./products";

export type ShopCardItem = Pick<Product, "slug" | "name" | "nameKo" | "categoryKo" | "color" | "image" | "badge"> &
  Partial<Pick<Product, "price" | "listPrice">>;

export type PhotoListing = {
  slug: string;
  alias?: string;
  directory: string;
  name: string;
  nameKo: string;
  categoryKo: string;
  color: string;
  tagline: string;
  description: string;
  facts: string[][];
  sections: { file: string; height: number; alt: string }[];
};

export const PHOTO_LISTINGS: PhotoListing[] = photoCatalog;

export function getPhotoListing(slug: string) {
  return PHOTO_LISTINGS.find((photo) => photo.slug === slug || photo.alias === slug);
}

export function photoCard(photo: PhotoListing): ShopCardItem {
  const offer = getProduct(photo.slug);
  return {
    slug: photo.slug, name: offer?.name ?? photo.name, nameKo: photo.nameKo,
    categoryKo: photo.categoryKo, color: photo.color, image: photo.directory + "/cover.jpg",
    price: offer?.price, listPrice: offer?.listPrice, badge: offer?.badge,
  };
}
