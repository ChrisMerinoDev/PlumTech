import { use } from 'react';
import SingleProductPage from '@/app/components/SingleProductPage';
import { phoneList } from '@/app/product-list/Products';


const PhoneProductPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = use(params);

   return <SingleProductPage slug={slug} list={phoneList} />

}
export default PhoneProductPage;