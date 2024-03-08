import React from 'react'
import { useCartContext } from '../Context/CartContext'
import CartOperations from "../components/CartOperations"
import Button from "../components/Button"

export default function Cart() {
    const { items, deleteFromCart, getTotal, productInfo } = useCartContext()
    const products = items.map(item=> productInfo(item.id))
  return (
    <section className='md:w-[700px] m-auto'>
      <ul className='py-9'>
        {products?.map(cart=> {
          return <li key={cart.id} className='bg-green-0 gap-3 py-4 grid grid-cols-[auto] sm:grid-cols-[auto_1fr_1fr] border-b-2 sm:border-b-0 items-center px-6'>
            <div className='w-[150px] mr-5'>
              <img className='w-[180px] bg-amber-100 rounded' src={cart.image_url} alt="" />
            </div>
            <div className=''>
            <p className='text-xl font-bold text-amber-900'>${cart.price}</p>
            <h2 className='text-amber-800 italic text-xl'>{cart.name}</h2>
            </div>
            <div className='flex items-center justify-around gap-8'>

            <CartOperations coffee={cart} />
            <Button onClick={()=> deleteFromCart(cart.id)}>Delete</Button>
            </div>
          </li>
        })}
      </ul>
      {getTotal() === 0 ? <div className='text-center'><p className='text-center text-slate-400'>No Coffees Found! <Button type="link" to="/coffees">Shop Coffee</Button></p></div> :<div className='px-5 py-7  p-8 bg-amber-100 rounded'>
        <h2 className='text-base text-slate-500'>Total</h2>
        <p className='text-amber-900 font-bold text-3xl'>${getTotal()}</p>
        <div className='flex items-center justify-start mt-5 gap-7 '>
          <Button><Button type="link" to="/checkout">Checkout</Button></Button>
          <Button type="link" to="/coffees">Countinue Shopping</Button>
        </div>
      </div>}
    </section>
  )
}
