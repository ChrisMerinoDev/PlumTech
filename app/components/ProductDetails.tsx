"use client"

import Image from 'next/image';
import React from 'react'
import { useCartStore } from '../store/useCartStore';
import toast from 'react-hot-toast';

interface ProductDetailsProps {
  productName: string;
  productImage: string;
  productPrice: number;
  productDescription: string;
  productDetails: string;
  productCategory: string;
  productFeatures: string[];
  productSlug: string;
}

const ProductDetails = ({
  productName,
  productImage,
  productPrice,
  productDescription,
  productDetails,
  productCategory,
  productFeatures,
  productSlug,
}: ProductDetailsProps) => {
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

  return (
    <section className='flex flex-col justify-center items-center w-screen min-h-screen'>

      {/* Image */}
      <div className='flex w-8/12 sm:max-w-[50vh] lg:max-w-[80vh] lg:max-h-[70vh] overflow-hidden mt-6 rounded-xl shadow-black shadow-md'>
        <Image
          src={productImage}
          alt={productName}
          width={1600}
          height={1000}
          className='object-cover w-full h-auto'
        />
      </div>

      {/* Category Label */}

      {/* Product Info Section */}
      <section className='flex flex-col w-full max-w-3xl justify-center items-center mt-6 px-6'>

        <h1 className='text-4xl mt-2 text-center'>{productName}</h1>
        <p className='opacity-55'>{productCategory}</p>
        <p className='text-3xl mt-4'>${productPrice}</p>
        <p className='text-2xl font-bold mt-4 text-center'>{productDescription}</p>

        {/* Responsive Hidden Section */}
        <div className='sm:flex flex-col relative items-center mt-6'>
          <h1 className='mt-8 text-2xl mb-2 text-center'>Details:</h1>
          <p className='px-4 sm:px-28 lg:px-12 text-center'>{productDetails}</p>

          <h1 className='mt-8 text-2xl mb-4 text-center'>Features:</h1>
          <ul className='list-disc space-y-4 px-10 mb-10'>
            {productFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <br />

          <button 
            onClick={handleAdd}
            className='mx-auto mt-3 px-10 py-2 text-sm bg-blue-700 hover:bg-blue-800 hover:cursor-pointer text-white rounded-md block transition'>
              Add to Cart
            </button>
            <br />
        </div>

      </section>
    </section>
  )
}

export default ProductDetails;
