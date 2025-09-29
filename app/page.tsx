import { Hero } from "@/components";
import CarCard from "@/components/CarCard/carcard";
import Filter from "@/components/CustomFilter/filter";
import Searchbar from "@/components/Searchbar/searchbar";
import ShowMore from "@/components/ShowMore";
// import { fetchCars } from "@/utils";

export default async function Home() {

  const allCars: any[] = [];
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
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
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={1}
              isNext={allCars.length > 10}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>Bitte versuchen Sie es mit anderen Suchkriterien.</p>
          </div>
        )}
      </div>
    </main>
  )
}
