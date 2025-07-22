"use client"

import { useCartStore } from '@/app/store/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

interface ProductCardProps {
  productName: string;
  productImage: string;
  productDescription?: string;
  productPrice?: number;
  productSlug: string; // this prop identifies the item
  productLink: string;
}

const ProductCard = ({
  productName,
  productImage,
  productDescription,
  productPrice,
  productSlug,
  productLink,
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

    return toast.success('Item Added to your Cart!')
  }
  
  
  if (!productImage) {
    console.error('Invalid format, please provide a product name or image.');
    return <p className='text-bold text-red-600'>Product info missing</p>
  }

  return (
    <div className='w-48 mx-auto my-1 flex flex-col'>
      <Link href={productLink} className='relative w-48 h-44 mx-auto'>
        <Image
          src={productImage}
          alt={productName}
          fill
          className='rounded-sm object-cover shadow-lg shadow-black hover:opacity-90 transition'
          priority
        />
      </Link>
      <div className='mt-2'>
        <p className='text-2xl font-bold mt-2 text-center w-full'>
          <span className='text-gray-100'>
          {productName}
          </span>
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
