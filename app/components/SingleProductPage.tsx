"use client"

import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

type Props = {
    slug: string;
    list: Product[];
};

const SingleProductPage = ({ slug, list }: Props) => {
    const product = list.find((item) => item.slug === slug);
    if(!product) return notFound();

    return (
        <ProductDetails 
            productName={product.name}
            productImage={product.image}
            productCategory={product.category}
            productPrice={product.price}
            productDescription={product.description}
            productDetails={product.details}
            productFeatures={product.features}
            productSlug={product.slug}
        />
    )
}
export default SingleProductPage;