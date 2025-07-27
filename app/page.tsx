import Link from "next/link";
import BigProductDisplayCard from "./components/cards/BigProductDisplayCard";
import SmallProductDisplayCard from "./components/cards/SmallProductDisplayCard";
import { ROUTES } from "./constants/routes";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">

      <section className="lg:flex flex-col mt-14 mx-6 lg:justify-center lg:items-center">
          <h1 className="text-6xl">
            PlumTech. <span className="text-gray-200">Your gateway to next-gen tech.</span>
          </h1>
          <p className="mt-4 text-gray-400 text-xl max-w-3xl">
            Dive into our collection of blazing-fast laptops, brilliant phones, and immersive audio experiences. Find the tech you love—and discover what’s next.
          </p>
      </section>

            <div className="flex flex-col sm:flex-row justify-center items-center">
              {/* Components to render here, map over the thumbnail image of each list item and make it inside the small
                  ProductDisplayCard */}
              <Link href={ROUTES.LAPTOPS}>
                <SmallProductDisplayCard 
                  productImage="/Laptops/Laptop5.jpg"
                  productName="Laptops"
                />
              </Link>
              
              <Link href={ROUTES.PHONES}>
              <SmallProductDisplayCard 
                productImage="/Phones/Phone2.jpg"
                productName="Phones"
              />
              </Link>

              <Link href={ROUTES.HEADPHONES}>
              <SmallProductDisplayCard 
                productImage="/Headphones/Headphone3.jpg"
                productName="Headphones"
              />
              </Link>
            </div>

            <div className="flex flex-col mx-6 lg:items-center">
              <h1 className="text-4xl">
                The latest. <span className="text-[#FFD479] font-bold">Take a look at what's new.</span>
              </h1>

            <div className="flex flex-col md:flex-row gap-8 my-5 lg:justify-center">
              <Link
                href={'/laptops/plasmabook-x1'}
                >
              <BigProductDisplayCard
                productImage="/Laptops/Laptop1.jpg"
                productName="PlasmaBook X1"
              />
              </Link>

              <Link href={'/phones/celestia-one'}>
              <BigProductDisplayCard
                productImage="/Phones/Phone1.jpg"
                productName="Celestia One"
              /> 
              </Link> 

              <Link href={'/headphones/echozen-pro'}>
              <BigProductDisplayCard
                productImage="/Headphones/Headphone1.jpg"
                productName="EchoZen Pro"
              />  
              </Link>
              
              
            </div>
            </div>
            <br />
            <br />
    </main>
  )
}

