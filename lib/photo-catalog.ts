import photoCatalog from "./photo-catalog.json";
import { getProduct, type Product } from "./products";

export type ShopCardItem = Pick<Product, "slug" | "name" | "nameKo" | "categoryKo" | "color" | "image" | "badge"> &
  Partial<Pick<Product, "price" | "listPrice">> & { priceUnit?: string };

export type PurchaseItem = Pick<Product, "slug" | "name" | "nameKo" | "price" | "sizes" | "image"> &
  { optionLabel?: string };

export type PhotoGalleryImage = { file: string; alt: string; caption: string };

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
  price?: number;
  priceUnit?: string;
  purchaseOptions?: { label: string; values: string[] };
  facts: string[][];
  gallery?: PhotoGalleryImage[];
  sections: { file: string; width?: number; height: number; alt: string; id?: string; label?: string }[];
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
    price: offer?.price ?? photo.price, priceUnit: photo.priceUnit,
    listPrice: offer?.listPrice, badge: offer?.badge,
  };
}

export function photoPurchaseItem(photo: PhotoListing): PurchaseItem | undefined {
  if (photo.price == null || !photo.purchaseOptions?.values.length) return;
  return {
    slug: photo.slug, name: photo.name, nameKo: photo.nameKo,
    image: photo.directory + "/cover.jpg", price: photo.price,
    optionLabel: photo.purchaseOptions.label, sizes: photo.purchaseOptions.values,
  };
}
