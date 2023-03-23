
import { useCart } from "../../context/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from '../../services/firebase/index'
import Form from "../Form/Form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const { cart, totalTopay, clearCart } = useCart();
    const [buyerPhone, setBuyerPhone] = useState('');
    const [buyerName, setBuyerName] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('')

    const navigate = useNavigate()
    

    const createOrder = async () => {
        setLoading(true)
        
        try {
            const objOrder = {
                    buyer: {
                    name: buyerName,
                    phone: buyerPhone,
                    email: buyerEmail
                    
                },
                items: cart,
                totalTopay
            }
            console.log(objOrder)
            const productsOut = []
            const batch = writeBatch(db)
            
            const ids = cart.map(prod => prod.id)
            
            const productsRef = collection(db, 'products')
            
            const productsAddedFs = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            

            
            
            const { docs } = productsAddedFs
            

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    productsOut.push ({id: doc.id, ...dataDoc})
                }
            });

            if(productsOut.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)
                
                console.log(`el id de su orden es: ${orderAdded.id}`)
            } else {
                console.log('no hay stock')
            }

        } catch (error){
                console.log(error)
        } finally {
            setLoading(false)
        }
    } 
    
    if(loading){
        return <h1> se esta generando su orden...</h1>
    }

    return (
        <>
        <form className="formulario">
            <input value={buyerName} required type="text" name="name" placeholder="Ingresá tu nombre completo"  onChange={(e)=> setBuyerName  (e.target.value)}/>
            <input value={buyerEmail} required type="email" name="email" placeholder="Ingresá tu email" onChange={(e)=> setBuyerEmail  (e.target.value)}/>
            <input value={buyerPhone} required type="number" name="tel" placeholder="Ingresá tu teléfono" onChange={(e)=> setBuyerPhone  (e.target.value)}/>
            
        </form>
        {/* <Form /> */}
        <button type="submit" onClick={createOrder} className="generarOrden">Generar orden</button>
        </>
    )
}

export default Checkout
