import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  productName: string;
  productImage: string;
  productDescription?: string;
  productPrice?: number;
}

const ProductCard = ({
  productName,
  productImage,
  productDescription,
  productPrice,
}: ProductCardProps) => {
  if (!productImage) {
    console.error('Invalid format, please provide a product name or image.');
    return (
      <p className='text-bold text-red-600'>
        Product info missing
      </p>
    );
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
          <p className='text-yellow-300 text-lg font-semibold text-center mt-2'>
            ${productPrice.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
