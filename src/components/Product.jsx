import { useCartContext } from "../Context/CartContext"
import Button from "./Button"
import CartOperations from "./CartOperations"

export default function Product({coffee}){
    const { addToCart, getQuantity, deleteFromCart } = useCartContext()
    const productQuantity = getQuantity(coffee.id)
    return <li className={`rounded-lg overflow-hidden ${productQuantity > 0 && "bg-amber-100"} p-3 grid grid-rows-[auto] sm:w-auto  items-start`}>
        <div className="h-[200px] flex items-center justify-center  bg-slate-0">
            <img src={coffee.image_url} alt="" className="h-[200px] sm:h-auto sm:w-[95%]" />
        </div>
        <div className="py-3 px-1">
        <h2 className="pl-3 border-l-4 border-amber-400 my-1 text-2xl font-semibold text-amber-900">${coffee.price}</h2> 
        <p className="text-xl text-amber-900 italic">{coffee.name}</p>
        <p className="text-slate-700">{coffee.flavor_profile}</p>
        </div>
        <div className={`grid gap-4 grid-cols-${productQuantity === 0 ? "1" : "2"}`}>
        {productQuantity > 0 && <CartOperations coffee={coffee} />}
        {productQuantity === 0 ? <Button onClick={()=> addToCart(coffee.id)} className='p-3 bg-amber-500 font-semibold text-slate-800'>Add to cart</Button> 
        : <Button onClick={()=> deleteFromCart(coffee.id)} className='p-3 bg-amber-400 rounded'>Delete</Button>
        }
    </div>
        </li>
  }