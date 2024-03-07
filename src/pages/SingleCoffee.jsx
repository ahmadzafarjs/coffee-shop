
import { useCartContext } from '../Context/CartContext'
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import CartOperations from '../components/CartOperations';

function SingleCoffee() {
    const {id} = useParams()
    const { coffees, getQuantity, addToCart, deleteFromCart } = useCartContext();
    const product = coffees.find(item => item.id == id)
    const quantity = getQuantity(product.id)
  return (
    <section className='md:h-[90vh] flex flex-col md:flex-row items-center justify-center gap-6'>
        <img src={product.image_url} alt="" className='w-[600px] md:bg-amber-100 rounded' />
        <div className='w-[300px]'>
            <ProductDetails title="Name" value={product.name} />
            <ProductDetails title="Description" value={product.description} />
            <ProductDetails title="Price" value={product.price} />
            <ProductDetails title="Region" value={product.region} />
            <ProductDetails title="Weight" value={product.weight} />
            <ProductDetails title="Roast Level" value={product.roast_level} />
            <ProductDetails title="Flavor Profile" value={product.flavor_profile} />
            <div className='bg-slate-100 rounded p-2'>
                <p className='text-amber-800 mb-3'>Quantity: {quantity}</p>
                
                {quantity > 0 ? 
                <div className='grid grid-cols-2 '>
                <Button onClick={()=> deleteFromCart(product.id)}>Delete</Button>
                <CartOperations coffee={product} />
                 </div>
                 : <Button onClick={()=> addToCart(product.id)}>Add to cart</Button>}
            </div>
        </div>
    </section>
  )
}
function ProductDetails({title, value}){
    return (
        <>
        <h2 className='font-semibold text-slate-700 text-lg'>{title}</h2>
        <p className='text-slate-500'>{value}</p>
        <hr className='mt-2 mb-5' />
        </>
    )
}
export default SingleCoffee
