import React from 'react'
import Product from '../components/Product';
import { useCartContext } from '../Context/CartContext';
export default function Products() {
  const {coffees} = useCartContext()
  return (
    <section className='w-[90vw] m-auto md:w-[920px] '>
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
        {coffees.map(coffee=> <Product key={coffee.id} coffee={coffee} />)}
    </ul>
    </section>
  )
}
