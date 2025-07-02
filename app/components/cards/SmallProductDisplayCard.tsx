import React from 'react'
interface SmallProductDisplayCardProps {
  productName: string;
  productImage: string;
}

const SmallProductDisplayCard = ({ productName, productImage }: SmallProductDisplayCardProps ) => {

  // Here I am checking if the props are being passed
  if (!productName || !productImage) {
    console.error('Invalid format, please provide a product name or image.')
    // the "return", prevents the props for being rendered in case they are non-existent and 
    // it renders the text "Product info missing" instead
    return <p className='text-bold text-red-600'>Product info missing</p>
  }

  return (
    <div className='mx-6 my-12'>
      <div className='w-fit text-center'>
      <img 
        src={productImage} 
        alt={productName} 
        className='rounded-xl w-32 h-32 object-cover shadow-xs shadow-gray-700' />
      <p className='text-gray-200 mt-2'>{productName}</p>
      </div>
    </div>
  )
}

export default SmallProductDisplayCard