import { Hero } from "@/components";
import Filter from "@/components/CustomFilter/filter";
import Searchbar from "@/components/Searchbar/searchbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Auto katalog</h1>
          <p>Entdecken Sie das Auto, das Sie suchen</p>
        </div>

        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <Filter title="fuel"/>
            <Filter title="year"/>
          </div>
        </div>
      </div>
    </main>
  )
}
