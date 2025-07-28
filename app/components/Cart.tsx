// This will use the Zustand store and display cart items + logic (e.g. add, remove, total).
"use client"

import { useCartStore } from "../store/useCartStore";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";

const Cart = () => {
    const cartItems = useCartStore((state) => state.cartItems);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const addItem = useCartStore((state) => state.addToCart)
    const getTotal = useCartStore((state) => state.getTotal);
    const clearCart = useCartStore((state) => state.clearCart);
    // const checkout = useCartStore((state) => state.clearCart);

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center h-[calc(95vh-6rem)] sm:h-[calc(100vh-6rem)] w-screen overflow-hidden">
                <Image src='/cartpty.png' alt="empty-cart" width={320} height={320} className="w-[212px] h-[212px] sm:w-[312px] sm:h-[312px] object-contain" />
                <h2 className="text-4xl sm:text-5xl mx-auto">Your cart is empty...</h2>
                {/* <Image src='/cancel.svg' alt="cancel" width={100} height={100} className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] mt-5" /> */}
            </div>
        )
    }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
        <ul className="space-y-8">
            {cartItems.map((item) => (
                <li key={item.id} className="flex flex-col justify-between items-center border-b pb-4.5 sm:flex-row">
                    <div className="relative w-24 h-24">
                        <Image src={item.ProductImage} alt={item.ProductName} fill className="object-cover rounded-md"/>
                    </div>
                        <h3 className="text-lg font-semibold mt-2 sm:mt-0">{item.ProductName}</h3>
                    <div className="flex gap-4 items-center mt-1 sm:mt-0">
                        <p className="text-md text-gray-400 font-semibold">Quantity x {item.Quantity}</p>
                        <p className="text-md text-gray-400 font-semibold">Price: ${item.Price}</p>
                    </div>
                    <div className="flex mt-2 gap-2 sm:mt-0">
                    <button onClick={() => addItem(item)} className="text-md hover:cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-[#CAD6F6] transition-colors">
                    <Image src='/cross.svg' alt="remove" width={17} height={17} />
                    </button>
                    <button onClick={() => removeFromCart(item.id)} className="text-md text-red-500 hover:cursor-pointer px-4 py-2 rounded-lg bg-[#CAD6F6] hover:bg-[#AFC1DD] transition-colors">
                        <Image src='/remove.svg' alt="remove" width={17} height={17} />
                    </button>
                    </div>
                </li>
            ))}
        </ul>
        <div className="flex justify-between mt-6">
            <button className="px-4 py-1.5 rounded-lg cursor-pointer text-red-600  hover:underline" onClick={clearCart}>
                Clear Cart
            </button>

            <div>
                <CheckoutButton />
            </div>
        </div>

        <div className="mt-8 text-right text-xl font-semibold">
            Subtotal: ${getTotal().toFixed(2)}
        </div>
    </div>
  )
}

export default Cart;