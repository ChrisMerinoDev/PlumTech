import Link from "next/link";
import BigProductDisplayCard from "./components/cards/BigProductDisplayCard";
import SmallProductDisplayCard from "./components/cards/SmallProductDisplayCard";
import { ROUTES } from "./constants/routes";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <section>          

      <section className="mt-14 mx-6">
  <h1 className="text-6xl text-gray-200 font-bold">
    Store. <span>Your gateway to next-gen tech.</span>
  </h1>
  <p className="mt-4 text-gray-400 text-xl max-w-3xl">
    Dive into our collection of blazing-fast laptops, brilliant phones, and immersive audio experiences. Find the tech you love—and discover what’s next.
  </p>
</section>

            <div className="flex justify-center my-8">
              {/* Components to render here, map over the thumbnail image of each list item and make it inside the small
                  ProductDisplayCard */}
              <Link href={ROUTES.LAPTOPS}>
                <SmallProductDisplayCard 
                  productImage="/Assets/Laptops/Laptop5.jpg"
                  productName="Laptops"
                />
              </Link>
              
              <Link href={ROUTES.PHONES}>
              <SmallProductDisplayCard 
                productImage="/Assets/Phones/Phone2.jpg"
                productName="Phones"
              />
              </Link>

              <Link href={ROUTES.HEADPHONES}>
              <SmallProductDisplayCard 
                productImage="/Assets/Headphones/Headphone3.jpg"
                productName="Headphones"
              />
              </Link>
            </div>

            <div className="mx-6">
              <h2 className="text-4xl">
                The latest. <span className="text-white font-normal">Take a look at what's new.</span>
              </h2>

            <div className="flex flex-col md:flex-row gap-8 my-5 w-full">
              <BigProductDisplayCard
                productImage="/Assets/Laptops/Laptop1.jpg"
                productName="PlasmaBook X1"
              />

              <BigProductDisplayCard
                productImage="/Assets/Phones/Phone1.jpg"
                productName="Celestia One"
              />  

              <BigProductDisplayCard
                productImage="/Assets/Headphones/Headphone1.jpg"
                productName="EchoZen Pro"
              />  
              
            </div>
            </div>
          </section>
    </main>
  )
}

