import React from 'react'
interface BigProductDisplayCardProps {
  productName?: string;
  productImage: string;
}

const BigProductDisplayCard = ({ productName, productImage }: BigProductDisplayCardProps ) => {

  // Here I am checking if the props are being passed
  if (!productImage) {
    console.error('Invalid format, please provide a product name or image.')
    // the "return", prevents the props for being rendered in case they are non-existent and 
    // it renders the text "Product info missing" instead
    return <p className='text-bold text-red-600'>Product info missing</p>
  }

  return (
    <div className='mx-6 my-5'>
      <div className='w-fit text-center'>
        <p className='absolute text-gray-50 mx-6 my-8 text-2xl font-bold'>{productName}</p>
      <img 
        src={productImage} 
        alt={productName} 
        className='rounded-xl w-90 h-104 object-cover shadow-lg shadow-gray-900' />
      </div>
    </div>
  )
}

export default BigProductDisplayCard