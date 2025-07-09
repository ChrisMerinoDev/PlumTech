import ProductDetails from '@/app/components/ProductDetails';
import { laptopList } from '@/app/product-list/Products';
import { notFound } from 'next/navigation';
import React from 'react'

const LaptopsProductPage = ({ params }: { params: { slug: string } }) => {

    // Storing the slug value in a variable
    const laptop = params.slug;

    // Handle error
   if(!laptop) return notFound();

   const laptopDetails = laptopList.find(
    (item) => item.slug === laptop
)

    if(!laptopDetails) return notFound();
    
    console.log(laptopDetails)

   return (
    
    <ProductDetails 
        productName={laptopDetails.name}
        productImage={laptopDetails.image}
        productCategory={laptopDetails.category}
        productPrice={laptopDetails.price}
        productDescription={laptopDetails.description}
        productDetails={laptopDetails.details}
        productFeatures={laptopDetails.features}
    />
   )

}

export default LaptopsProductPage;