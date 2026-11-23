import photoCatalog from "./photo-catalog.json";
import { getProduct, PRODUCTS, type Product } from "./products";

export type ShopCardItem = Pick<Product, "slug" | "name" | "nameKo" | "categoryKo" | "color" | "image" | "badge"> &
  Partial<Pick<Product, "price" | "listPrice">> & { priceUnit?: string };

type LinkedOption = { label: string; slug: string };

export type PurchaseItem = Pick<Product, "slug" | "name" | "nameKo" | "price" | "sizes" | "image"> &
  { optionLabel?: string; linkedOptions?: LinkedOption[] };

export type PhotoGalleryImage = { file: string; alt: string; caption: string };

export type PhotoListing = {
  slug: string;
  alias?: string;
  previousOption?: { slug: string; value: string };
  directory: string;
  useGalleryCover?: boolean;
  name: string;
  nameKo: string;
  categoryKo: string;
  color: string;
  tagline: string;
  description: string;
  price?: number;
  priceUnit?: string;
  purchaseOptions?: { label: string; values: string[]; links?: LinkedOption[] };
  facts: string[][];
  gallery?: PhotoGalleryImage[];
  sections: { file: string; width?: number; height: number; alt: string; id?: string; label?: string }[];
};

export const PHOTO_LISTINGS: PhotoListing[] = photoCatalog;

export const catalogSlugs = Array.from(new Set([
  ...PRODUCTS.map((product) => product.slug),
  ...PHOTO_LISTINGS.flatMap(({ slug, alias }) => alias ? [slug, alias] : [slug]),
]));

export function getPhotoListing(slug: string) {
  return PHOTO_LISTINGS.find((photo) => photo.slug === slug || photo.alias === slug);
}

export function photoCover(photo: PhotoListing) {
  const first = photo.useGalleryCover && photo.gallery?.[0];
  if (first) return { url: photo.directory + "/" + first.file, width: 1000, height: 1000 };
  return { url: photo.directory + "/cover.jpg", width: 900, height: 1200 };
}

export function photoCard(photo: PhotoListing): ShopCardItem {
  const offer = getProduct(photo.slug);
  return {
    slug: photo.slug, name: offer?.name ?? photo.name, nameKo: photo.nameKo,
    categoryKo: photo.categoryKo, color: photo.color, image: photoCover(photo).url,
    price: offer?.price ?? photo.price, priceUnit: photo.priceUnit,
    listPrice: offer?.listPrice, badge: offer?.badge,
  };
}

export const catalogPrices = new Map<string, number>();
for (const slug of catalogSlugs) {
  const photo = getPhotoListing(slug);
  const price = photo ? photoCard(photo).price : getProduct(slug)?.price;
  if (price != null) catalogPrices.set(slug, price);
}

export function photoPurchaseItem(photo: PhotoListing): PurchaseItem | undefined {
  if (photo.price == null || !photo.purchaseOptions?.values.length) return;
  return {
    slug: photo.slug, name: photo.name, nameKo: photo.nameKo,
    image: photoCover(photo).url, price: photo.price,
    optionLabel: photo.purchaseOptions.label, sizes: photo.purchaseOptions.values,
    linkedOptions: photo.purchaseOptions.links,
  };
}

export const movedCartOptions = PHOTO_LISTINGS.flatMap((photo) => {
  const option = photo.previousOption;
  const item = photoPurchaseItem(photo);
  if (!option || !item) return [];
  return [{
    from: option,
    to: { slug: item.slug, size: item.sizes[0], name: item.name, nameKo: item.nameKo, image: item.image },
  }];
});

export type MovedCartOption = (typeof movedCartOptions)[number];
