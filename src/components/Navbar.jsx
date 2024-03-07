import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useCartContext } from "../Context/CartContext"
import Button from './Button'

const Navbar = () => {
  const {items} = useCartContext()
  const cartQty = items.reduce((acc, val)=> acc + val.quantity, 0)
  
  return (
    <header>
      <div className="flex justify-between items-center w-[90vw] m-auto h-[50px]">

        <Logo />
        
        <nav className="flex gap-5">
          <Button to="/" type="link">Home</Button>
          <Button to="/coffees" type="link">Coffees</Button>
          <Button to="/cart" type="link">Cart {cartQty > 0 && <span className="text-amber-700 font-semibold absolute top-[-6px] right-[-15px]">{cartQty}</span>}</Button>
        </nav>
      </div>
    </header>
  )
}



export default Navbar
