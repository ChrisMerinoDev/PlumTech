import ProductCard from '@/app/components/cards/ProductCard';
import { laptopList, phoneList } from '@/app/product-list/Products';
import React from 'react'

const PhonesPage = () => {
  return (
    <section className='flex flex-col w-full h-full'>
      
      <h1 className='mt-12 text-5xl text-center text-gray-100 font-bold'>Shop our latest phones</h1>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 mx-auto'>
      {phoneList.map((product, i) => (
        <ProductCard
          key={i}
          productName={product.name}
          productImage={product.image}
          productDescription={product.description}
          />
      ))}
      </div>
    </section>
  )
}

export default PhonesPage;