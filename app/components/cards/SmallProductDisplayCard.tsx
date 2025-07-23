import Image from 'next/image';
import React from 'react'

interface SmallProductDisplayCardProps {
  productName: string;
  productImage: string;
}

const SmallProductDisplayCard = ({ productName, productImage }: SmallProductDisplayCardProps) => {
  
  // Checking if the props are being passed for error handling
  if (!productName || !productImage) {
    console.error('Invalid format, please provide a product name or image.')
    return (
      <p className='font-bold text-red-600'>
        Product info missing
      </p>
    )
  }

  return (
    <div className="mx-6 my-12">
      <div
        className="
          relative
          w-32 
          h-32 
          rounded-xl 
          overflow-hidden 
          transition-all 
          duration-300 
          ease-out 
          hover:scale-110 
          hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)]
        "
      >
        <Image
          src={productImage}
          alt={productName}
          fill
          className="object-cover"
          priority
        />
      </div>
      <p className="mt-2 text-center font-bold text-lg">
        <span className='text-gray-200'>
        {productName}
        </span>
      </p>
    </div>
  )
}

export default SmallProductDisplayCard
