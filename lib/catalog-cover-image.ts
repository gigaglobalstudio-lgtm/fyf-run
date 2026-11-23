import socks from "@/public/detail/fyf-goods/black-running-socks/cover.jpg";
import kneeSleeve from "@/public/detail/fyf-goods/dot-knee-sleeve/cover.jpg";

// Static imports give edited covers a new cache key, including for previously saved cart items.
const versionedCovers = new Map([
  ["/detail/fyf-goods/black-running-socks/cover.jpg", socks.src],
  ["/detail/fyf-goods/dot-knee-sleeve/cover.jpg", kneeSleeve.src],
]);

export function catalogCoverImage(url: string) {
  return versionedCovers.get(url) ?? url;
}
