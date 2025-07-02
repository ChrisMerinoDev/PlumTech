import BigProductDisplayCard from "./components/cards/BigProductDisplayCard";
import SmallProductDisplayCard from "./components/cards/SmallProductDisplayCard";
import Navbar from "./components/navigation/Navbar";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[url('/Assets/Background/background.jpg)']">
      <section>
          <Navbar />

          <section className="mt-14 mx-6">
              <h1 className="text-6xl text-gray-500">
                <span className="text-gray-200">Store.</span> The best way to buy the <br /> products you love.
              </h1>
          </section>

            <div className="flex justify-center my-8">
              {/* Components to render here, map over the thumbnail image of each list item and make it inside the small
                  ProductDisplayCard */}
              <SmallProductDisplayCard 
                productImage="/Assets/Laptops/Laptop5.jpg"
                productName="Laptops"
              />

              <SmallProductDisplayCard 
                productImage="/Assets/Phones/Phone.jpg"
                productName="Phones"
              />

              <SmallProductDisplayCard 
                productImage="/Assets/Headphones/Headphone3.jpg"
                productName="Headphones"
              />
            </div>

            <div className="mx-6">
              <h2 className="text-3xl text-white">
                The latest. <span className="text-gray-500">Take a look at what's new, right now.</span>
              </h2>

            <div className="flex">
              <BigProductDisplayCard
                productImage="/Assets/Laptops/Laptop1.jpg"
                productName="RocketBook Pro 10"
              />

              <BigProductDisplayCard
                productImage="/Assets/Phones/Phone1.jpg"
                productName="ST Line"
              />  

              <BigProductDisplayCard
                productImage="/Assets/Headphones/Headphone4.jpg"
                productName="LF Pros"
              />  
              
            </div>
            </div>
          </section>
    </main>
  )
}

