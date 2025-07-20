// This will use the Zustand store and display cart items + logic (e.g. add, remove, total).
"use client"

import { useCartStore } from "../store/useCartStore";
import Image from "next/image";

const Cart = () => {
    const cartItems = useCartStore((state) => state.cartItems);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const getTotal = useCartStore((state) => state.getTotal);

    if (cartItems.length === 0) {
        return (
            <div className="flex justify-center items-center h-[calc(100vh-6rem)] w-screen overflow-hidden">
                <h1 className="text-3xl text-gray-50">Your cart is empty...</h1>
            </div>
        )
    }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        <ul className="space-y-6">
            {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b pb-4">
                    <div>
                        <Image src={item.ProductImage} alt={item.ProductName} width={64} height={64} className="rounded-md"/>
                        <h3 className="text-lg font-semibold">{item.ProductName}</h3>
                        <p className="text-sm text-gray-400 font-semibold">Quantity: {item.Quantity} x ${item.Price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-600 hover:underline hover:cursor-pointer">
                        Remove
                    </button>
                </li>
            ))}
        </ul>

        <div className="mt-8 text-right text-xl font-semibold">
            Subtotal: ${getTotal().toFixed(2)}
        </div>
    </div>
  )
}

export default Cart;