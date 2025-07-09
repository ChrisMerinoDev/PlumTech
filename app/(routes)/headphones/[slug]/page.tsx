import ProductDetails from '@/app/components/ProductDetails';
import { headPhoneList } from '@/app/product-list/Products';
import { notFound } from 'next/navigation';
import React from 'react'

const HeadphonesProductPage = ({ params }: { params: { slug: string } }) => {

    // Storing the slug value in a variable
    const headphone = params.slug;

    // Handle error
   if(!headphone) return notFound();

   const headphoneDetails = headPhoneList.find(
    (item) => item.slug === headphone
)

    if(!headphoneDetails) return notFound();
    
    console.log(headphoneDetails)

   return (
    
    <ProductDetails 
        productName={headphoneDetails.name}
        productImage={headphoneDetails.image}
        productCategory={headphoneDetails.category}
        productPrice={headphoneDetails.price}
        productDescription={headphoneDetails.description}
        productDetails={headphoneDetails.details}
        productFeatures={headphoneDetails.features}
    />
   )

}

export default HeadphonesProductPage;