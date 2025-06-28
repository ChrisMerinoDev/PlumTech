import SmallProductDisplayCard from "./components/cards/SmallProductDisplayCard";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[url('/Assets/Background/background.jpg)']">
      <section>
        <div>
          <SmallProductDisplayCard />
        </div>
      </section>
    </main>
  )
}

