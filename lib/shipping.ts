export const FREE_SHIPPING_MINIMUM = 50000;

export function shippingFee(subtotal: number) {
  return subtotal > 0 && subtotal < FREE_SHIPPING_MINIMUM ? 3000 : 0;
}
