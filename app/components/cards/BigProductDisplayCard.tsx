import Image from 'next/image';
import React from 'react';

interface BigProductDisplayCardProps {
  productName: string;
  productImage: string;
  productDescription?: string;
}

const BigProductDisplayCard = ({
  productName,
  productImage,
}: BigProductDisplayCardProps) => {
  if (!productImage) {
    console.error('Invalid format, please provide a product name or image.');
    return (
      <p className='font-bold text-red-600'>
        Product info missing
      </p>
    );
  }

  return (
    <div
      className="
        w-[360px] 
        h-[432px] 
        mx-auto 
        my-4 
        overflow-hidden 
        rounded-sm 
        transition-all 
        duration-300 
        ease-out 
        hover:scale-105 
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]
      "
    >
      <div className="relative w-full h-full">
        <Image
          src={productImage}
          alt={productName}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
          <p className="text-2xl text-center font-bold">
            <span className='text-gray-100'>
            {productName}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigProductDisplayCard;
