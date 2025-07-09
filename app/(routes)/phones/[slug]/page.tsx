import ProductDetails from '@/app/components/ProductDetails';
import { phoneList } from '@/app/product-list/Products';
import { notFound } from 'next/navigation';
import React from 'react'

const PhonesProductPage = ({ params }: { params: { slug: string } }) => {

    // Storing the slug value in a variable
    const phone = params.slug;

    // Handle error
   if(!phone) return notFound();

   const phoneDetails = phoneList.find(
    (item) => item.slug === phone
)

    if(!phoneDetails) return notFound();
    
    console.log(phoneDetails)

   return (
    
    <ProductDetails 
        productName={phoneDetails.name}
        productImage={phoneDetails.image}
        productCategory={phoneDetails.category}
        productPrice={phoneDetails.price}
        productDescription={phoneDetails.description}
        productDetails={phoneDetails.details}
        productFeatures={phoneDetails.features}
    />
   )

}

export default PhonesProductPage;