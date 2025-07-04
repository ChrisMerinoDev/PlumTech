import Image from 'next/image';
import React from 'react'
interface BigProductDisplayCardProps {
  productName: string;
  productImage: string;
  productDescription?: string;
}

const ProductCard = ({ productName, productImage, productDescription }: BigProductDisplayCardProps ) => {

  // Here I am checking if the props are being passed
  if (!productImage) {
    console.error('Invalid format, please provide a product name or image.')
    // the "return", prevents the props for being rendered in case they are non-existent and 
    // it renders the text "Product info missing" instead
    return <p className='text-bold text-red-600'>Product info missing</p>
  }

  return (
    <div className='w-48 mx-auto my-1 flex flex-col'>
    <div className='relative w-48 h-44 mx-auto '>
    <Image 
      src={productImage} 
      alt={productName} 
      fill
      className='rounded-sm object-cover shadow-lg shadow-black'
      priority
    />
    </div>
    <div className='mt-2'>
    <p className='text-gray-50 text-2xl font-bold mt-2 text-center w-full'>{productName}</p>
    <p className='text-gray-300 text-center w-full mt-1'>{productDescription}</p>
    </div>
  </div>
  )
}

export default ProductCard;