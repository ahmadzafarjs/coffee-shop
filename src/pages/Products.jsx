import React from 'react'
import Product from '../components/Product';
import { useCartContext } from '../Context/CartContext';
import FilterBy from '../components/FilterBy';
import { useSearchParams } from 'react-router-dom';
import Loading from '../components/Loading';
export default function Products() {
  const {coffees, loading} = useCartContext()
  const [searchParams] = useSearchParams()
  let filteredCoffee;
  let getPrice = searchParams.get("price") || "all";
  if (getPrice === "low")  filteredCoffee = coffees.sort((a, b)=> a.price - b.price)
  if (getPrice === "high")  filteredCoffee = coffees.sort((a, b)=> b.price - a.price)
  if (getPrice === "" || getPrice === "all")  filteredCoffee = coffees
  return (
    <section className='w-[90vw] m-auto md:w-[920px] '>
      <div>
      <h3>Filter by price</h3>
      <FilterBy title="price" options={[
        {
          label: "All",
          value: "all"
        },
        {
          label: "Low price to High",
          value: "low"
        },
        {
          label: "High price to Low",
          value: "high"
        },
      ]} />
      </div>
    {loading ? <Loading /> :<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
        {filteredCoffee.map(coffee=> <Product key={coffee.id} coffee={coffee} />)}
    </ul>}
    </section>
  )
}
