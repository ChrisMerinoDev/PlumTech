import { use } from 'react';
import SingleProductPage from '@/app/components/SingleProductPage';
import { laptopList } from '@/app/product-list/Products';


const LaptopProductPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = use(params);

   return <SingleProductPage slug={slug} list={laptopList} />

}
export default LaptopProductPage;