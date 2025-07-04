import Image from 'next/image';
import React from 'react'
interface BigProductDisplayCardProps {
  productName: string;
  productImage: string;
  productDescription?: string;
}

const BigProducDisplayCard = ({ productName, productImage }: BigProductDisplayCardProps ) => {

  // Here I am checking if the props are being passed
  if (!productImage) {
    console.error('Invalid format, please provide a product name or image.')
    // the "return", prevents the props for being rendered in case they are non-existent and 
    // it renders the text "Product info missing" instead
    return <p className='text-bold text-red-600'>Product info missing</p>
  }

  return (
    <div className='w-90 mx-auto my-1 flex flex-col'>
    <div className='relative w-90 h-108 mx-auto '>
    <Image 
      src={productImage} 
      alt={productName} 
      fill
      className='rounded-sm object-cover shadow-lg shadow-black -z-10'
      priority
    />
    <p className='z-10 text-2xl mt-2 text-center w-full'><span className='text-white font-bold'>{productName}</span></p>
    </div>
  </div>
  )
}

export default BigProducDisplayCard;