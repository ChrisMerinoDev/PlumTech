"use client"

import { useCartStore } from '@/app/store/useCartStore';
import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  productName: string;
  productImage: string;
  productDescription?: string;
  productPrice?: number;
  productSlug: string; // this prop identifies the item
}

const ProductCard = ({
  productName,
  productImage,
  productDescription,
  productPrice,
  productSlug,
}: ProductCardProps) => {
  const addToCart = useCartStore(state => state.addToCart)

  const handleAdd = () => {
    if (!productPrice) return;

    const safeId = productSlug 

    addToCart({
      id: safeId,
      ProductName: productName,
      ProductImage: productImage,
      Price: productPrice,
      Quantity: 1,
    })
  }
  
  
  if (!productImage) {
    console.error('Invalid format, please provide a product name or image.');
    return <p className='text-bold text-red-600'>Product info missing</p>
  }

  return (
    <div className='w-48 mx-auto my-1 flex flex-col'>
      <div className='relative w-48 h-44 mx-auto'>
        <Image
          src={productImage}
          alt={productName}
          fill
          className='rounded-sm object-cover shadow-lg shadow-black'
          priority
        />
      </div>
      <div className='mt-2'>
        <p className='text-gray-50 text-2xl font-bold mt-2 text-center w-full'>
          {productName}
        </p>
        <p className='text-gray-300 text-center w-full mt-1'>
          {productDescription}
        </p>
        {productPrice !== undefined && (
          <p className='text-lg font-semibold text-center mt-2'>
            <span className='text-gray-50'>
            ${productPrice.toLocaleString()}
            </span>
          </p>
        )}

        {/* Add to Cart Button */}
        <button 
          onClick={handleAdd}
          className='mx-auto mt-3 px-6 py-1.5 text-sm bg-blue-700 hover:bg-blue-800 hover:cursor-pointer text-white rounded-md block transition'>
            Add to Cart
          </button>
      </div>
    </div>
    
  );
};

export default ProductCard;
