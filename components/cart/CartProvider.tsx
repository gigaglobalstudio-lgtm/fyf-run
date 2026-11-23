"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { MovedCartOption } from "@/lib/photo-catalog";

export type CartItem = {
  slug: string;
  name: string;
  nameKo: string;
  price: number;
  size: string;
  qty: number;
  image: string;
};

type CartState = { items: CartItem[]; hydrated: boolean };

type CartAction =
  | { type: "hydrate"; items: CartItem[] }
  | { type: "add"; item: CartItem }
  | { type: "remove"; slug: string; size: string }
  | { type: "setQty"; slug: string; size: string; qty: number }
  | { type: "clear" };

const STORAGE_KEY = "fyf-cart-v1";

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return { items: action.items, hydrated: true };
    case "add": {
      const existing = state.items.find(
        (i) => i.slug === action.item.slug && i.size === action.item.size
      );
      const items = existing
        ? state.items.map((i) =>
            i === existing ? { ...i, price: action.item.price, qty: i.qty + action.item.qty } : i
          )
        : [...state.items, action.item];
      return { ...state, items };
    }
    case "remove":
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.slug === action.slug && i.size === action.size)
        ),
      };
    case "setQty":
      return {
        ...state,
        items: state.items.map((i) =>
          i.slug === action.slug && i.size === action.size
            ? { ...i, qty: Math.max(1, action.qty) }
            : i
        ),
      };
    case "clear":
      return { ...state, items: [] };
  }
}

const CartContext = createContext<{
  items: CartItem[];
  hydrated: boolean;
  count: number;
  total: number;
  add: (item: CartItem) => void;
  remove: (slug: string, size: string) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  clear: () => void;
} | null>(null);

export function CartProvider({ children, productPrices, movedOptions }: {
  children: ReactNode;
  productPrices: ReadonlyMap<string, number>;
  movedOptions: MovedCartOption[];
}) {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    hydrated: false,
  });
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const saved: CartItem[] = raw ? JSON.parse(raw) : [];
      const items: CartItem[] = [];
      for (const item of Array.isArray(saved) ? saved : []) {
        const move = movedOptions.find(({ from }) => from.slug === item?.slug && from.value === item.size);
        const current = move ? { ...item, ...move.to } : item;
        const price = productPrices.get(current?.slug);
        if (price === undefined) continue;
        const existing = items.find((row) => row.slug === current.slug && row.size === current.size);
        if (existing) existing.qty += current.qty;
        else items.push({ ...current, price });
      }
      dispatch({ type: "hydrate", items });
    } catch {
      dispatch({ type: "hydrate", items: [] });
    }
  }, [productPrices, movedOptions]);

  useEffect(() => {
    if (state.hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items, state.hydrated]);

  const value = useMemo(() => {
    const count = state.items.reduce((n, i) => n + i.qty, 0);
    const total = state.items.reduce((n, i) => n + i.price * i.qty, 0);
    return {
      items: state.items,
      hydrated: state.hydrated,
      count,
      total,
      add: (item: CartItem) => {
        const price = productPrices.get(item.slug);
        if (price !== undefined) dispatch({ type: "add", item: { ...item, price } });
      },
      remove: (slug: string, size: string) =>
        dispatch({ type: "remove", slug, size }),
      setQty: (slug: string, size: string, qty: number) =>
        dispatch({ type: "setQty", slug, size, qty }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [state, productPrices]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
