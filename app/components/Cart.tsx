// This will use the Zustand store and display cart items + logic (e.g. add, remove, total).
"use client"

import { useCartStore } from "../store/useCartStore";
import Image from "next/image";

const Cart = () => {
    const cartItems = useCartStore((state) => state.cartItems);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const addItem = useCartStore((state) => state.addToCart)
    const getTotal = useCartStore((state) => state.getTotal);
    const clearCart = useCartStore((state) => state.clearCart);

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
                <li key={item.id} className="flex justify-between items-center border-b pb-4.5">
                    <div className="relative w-24 h-24">
                        <Image src={item.ProductImage} alt={item.ProductName} fill className="object-cover rounded-md"/>
                    </div>
                        <h3 className="text-lg font-semibold">{item.ProductName}</h3>
                    <div className="flex gap-4 items-center">
                        <p className="text-md text-gray-400 font-semibold">Quantity x {item.Quantity}</p>
                        <p className="text-md text-gray-400 font-semibold">Price: ${item.Price}</p>
                    </div>
                    <div className="flex gap-2">
                    <button onClick={() => addItem(item)} className="text-sm text-white hover:underline hover:cursor-pointer hover:bg-blue-1000 bg-blue-700 px-5 py-1 rounded-lg">
                        Add
                    </button>
                    <button onClick={() => removeFromCart(item.id)} className="text-sm text-white hover:underline hover:cursor-pointer hover:bg-red-800 bg-red-700 px-5 py-1 rounded-lg">
                        Remove
                    </button>
                    </div>
                </li>
            ))}
        </ul>
        <div className="flex justify-end mt-6">
            <button className="px-4 py-1.5 bg-red-700 rounded-lg cursor-pointer text-white hover:bg-red-800" onClick={clearCart}>
                Clear Cart
            </button>
        </div>

        <div className="mt-8 text-right text-xl font-semibold">
            Subtotal: ${getTotal().toFixed(2)}
        </div>
    </div>
  )
}

export default Cart;