"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

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
            i === existing ? { ...i, qty: i.qty + action.item.qty } : i
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

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    hydrated: false,
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      dispatch({ type: "hydrate", items: raw ? JSON.parse(raw) : [] });
    } catch {
      dispatch({ type: "hydrate", items: [] });
    }
  }, []);

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
      add: (item: CartItem) => dispatch({ type: "add", item }),
      remove: (slug: string, size: string) =>
        dispatch({ type: "remove", slug, size }),
      setQty: (slug: string, size: string, qty: number) =>
        dispatch({ type: "setQty", slug, size, qty }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
