import ProductCard from '@/app/components/cards/ProductCard';
import { laptopList, phoneList } from '@/app/product-list/Products';
import Link from 'next/link';
import React from 'react'

const PhonesPage = () => {
  return (
    <section className='flex flex-col w-full h-full'>
      
      <h1 className='mt-12 text-5xl text-center text-gray-100 font-bold'>Shop our latest phones</h1>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 mx-auto'>
      {phoneList.map((product, i) => (
        
        <Link 
          key={i}
          href={`/phones/${product.slug}`}>
        <ProductCard
          
          productName={product.name}
          productImage={product.image}
          productDescription={product.description}
          productPrice={product.price}
          />
        </Link>

      ))}
      </div>
    </section>
  )
}

export default PhonesPage;