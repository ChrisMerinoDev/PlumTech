import { use } from 'react';
import SingleProductPage from '@/app/components/SingleProductPage';
import { headPhoneList } from '@/app/product-list/Products';


const HeadphoneProductPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = use(params);

   return <SingleProductPage slug={slug} list={headPhoneList} />

}
export default HeadphoneProductPage;