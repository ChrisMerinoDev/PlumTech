import { redirect } from 'next/navigation';
import React, { useState } from 'react'
import { ROUTES } from '../constants/routes';
import toast from 'react-hot-toast';
import { useCartStore } from '../store/useCartStore';

const CheckoutButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const clearCart = useCartStore((state) => state.clearCart)

    const handleClick = () => {
        setIsLoading(true);
        toast.success('Purchase Successful!')
        clearCart()
        redirect(ROUTES.HOME)
       
    }

  return (
    <div>
        <button onClick={handleClick}
            className='hover:cursor-pointer bg-blue-600 hover:bg-blue-700 px-2 py-2 rounded-lg transition-colors'>
            {isLoading ? 'Loading...' : 'Purchase'}
        </button>
    </div>
  )
}

export default CheckoutButton;