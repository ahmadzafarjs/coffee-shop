import { createContext, useContext, useEffect, useState } from "react";
import Cart from "../pages/Cart";
import { fetchCoffee } from "../services/apiProducts";

const CartContext = createContext({
    coffees: [],
    items: [],
    productInfo: ()=> {},
    getQuantity: ()=> {},
    addToCart: ()=> {},
    deleteFromCart: ()=> {},
    removeOneFromCart: ()=> {},
    getTotal: ()=> {},
})
export function CartContextProvider({children}) {
    const [coffees, setCoffees] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=> {
        fetchCoffee().then(data=> setCoffees(data))
    }, [])
    const value = {
        coffees: coffees,
        items: cart,
        productInfo,
        getQuantity,
        addToCart,
        deleteFromCart,
        removeOneFromCart,
        getTotal,
    }

    function productInfo(id) {
        const productInfo = coffees.find(product=> product.id == id)
            if (productInfo === undefined) throw new Error("Product not find!") 
    
            return productInfo;
    }
    function getQuantity(id) {
        const productQuantity = cart.find(item => item.id === id)?.quantity;
        if (productQuantity === undefined){
            return 0;
        }
        return productQuantity;
    }

    function addToCart(id) {
        const productQuantity = getQuantity(id)
        if(productQuantity === 0) {
            setCart([...cart, {id: id, quantity: 1}]);
        }
        else {
            setCart(cart.map(item=> {
                return item.id === id 
                ? {...item, quantity: item.quantity + 1}
                : item
            }))
        }
    }
    function deleteFromCart(id) {
        setCart(cart.filter(item=> item.id !== id))
    }
    function removeOneFromCart(id){
        const productQuantity = getQuantity(id)
        if (productQuantity === 1) {
            deleteFromCart(id)
        }
        else {
            setCart(cart.map(item=> {
                return item.id === id 
                ? {...item, quantity: item.quantity - 1}
                : item
            }))
        }
    }
    function getTotal(){
        let total = 0;
        cart.map(item=> {
            const product = productInfo(item.id)
            const productQuantity = getQuantity(item.id)
            total += (product.price * productQuantity)
        })
        return total
    }
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext(){
    const context = useContext(CartContext)
    if(context === undefined){
        throw new Error("Outside Context")
    }
    return context;
}