import React from 'react'
import { useCartContext } from '../Context/CartContext'

export default function CartOperations({coffee}) {
    const { addToCart, getQuantity, removeOneFromCart } = useCartContext()
    const productQuantity = getQuantity(coffee.id)
  return (
    <div className='flex items-center justify-center gap-5'>
            {<button className='rounded-full bg-amber-400 w-6 h-6 rounded' onClick={()=> removeOneFromCart(coffee.id)}>-</button>}
            <p className='font-bold text-xl'>{productQuantity}</p>
            <button className='rounded-full bg-amber-400 w-6 h-6 rounded' onClick={()=> addToCart(coffee.id)}>+</button>
        </div>
  )
}
