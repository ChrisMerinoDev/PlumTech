// This will hold the shared cart state and logic.
// Will hold cart items and actions like addToCart, removeFromCart, clearCart, and getTotal.

import { create } from "zustand";

interface CartItem {
    id: string; // slug
    ProductName: string;
    ProductImage: string;
    Price: number;
    Quantity: number;
}

interface CartState {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
    // Is going to display an array of the cart Items
    cartItems: [],

    addToCart: (item) => {
        const currentCart = get().cartItems;
        const existing = currentCart.find(p => p.id === item.id);
      
        if (existing) {
          set({
            cartItems: currentCart.map(p =>
              p.id === item.id
                ? { ...p, Quantity: p.Quantity + 1 }
                : p
            ),
          });
        } else {
          set({ cartItems: [...currentCart, { ...item, Quantity: 1 }] });
        }
      },

    removeFromCart: (id) => {
        set({
            cartItems: get().cartItems.filter(p => p.id !== id)
        })
    },

    clearCart: () => set({ cartItems: [] }),

    getTotal: () => 
        get().cartItems.reduce((total, item) => total + item.Price * item.Quantity, 0),
}))