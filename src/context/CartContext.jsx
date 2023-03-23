import { useState, useEffect ,createContext, useContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalProductsAdded, setTotalProductsAdded ] = useState(0)
    const [totalTopay, setTotalTopay] = useState(0)
    
    
    console.log(cart)


    useEffect(() => {
        theTotalTopay()
        getQuantity()
        
    }, [cart])
    
    const addItem = (producToAdd) =>{
        if(!IsInCart(producToAdd.id)){
            setCart([...cart, producToAdd])
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === producToAdd.id ){
                    const newProduct = {
                        ...prod,
                        quantity : producToAdd.quantity
                    }
                    return newProduct
                }
                else {
                    return prod
                }
            })

            setCart(newProducts)
        }
    }
    


    const theTotalTopay = () => {
        let total= 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        setTotalTopay(total)
    }

    const IsInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }
    

    const removeItem = (id) =>{
        const producto = cart.filter(prod => prod.id !== id)
        setCart(producto)
    }

    const getQuantity = () => {
        let count = 0

        cart.forEach(prod => {
            count += prod.quantity
        })
        setTotalProductsAdded(count) 
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        return cart.find(prod => prod.id === id)?.quantity
    }
    return (

        <CartContext.Provider value={{ cart, addItem, removeItem, totalProductsAdded, totalTopay, clearCart, getProductQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}