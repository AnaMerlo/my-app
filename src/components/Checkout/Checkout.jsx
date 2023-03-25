
import { useCart } from "../../context/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from '../../services/firebase/index'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Checkout.css'
import { DotPulse } from '@uiball/loaders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

<DotPulse 
    size={40}
    speed={1.3} 
    color="black" 
/>


const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const { cart, totalTopay, clearCart } = useCart();
    const [buyerName, setBuyerName] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('')
    const [buyerPhone, setBuyerPhone] = useState('');

    const navigate = useNavigate()
    

    const createOrder = async () => {
        setLoading(true)
        
        try {
            const objOrder = {
                    buyer: {
                    name: buyerName,
                    phone:buyerPhone,
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
                toast.info(`el id de su orden es: ${orderAdded.id}`, {theme: "dark"})
                
            } else {
                toast.warn('no hay stock', {theme: "dark"})
            }

        } catch (error){
                console.log(error)
        } finally {
            setLoading(false)
        }
    } 
    
    if(loading){
        return (
            <>
            <h1> se esta generando su orden...</h1>
            <div class="dot-pulse">
            <div class="dot-pulse__dot"></div>
            </div>
            </>
        ) 
    }

    return (
        <>
        <div className="form">
        <form action="" id="miForm" className="form" > 
                {/* <!-- campo para nombre --> */}
            <div>
                <label for="nombreApellido"></label>
                <input type="text"  required placeholder="Ingresa tu Nombre*" className="input" value={buyerName} onChange = {(e) => setBuyerName(e.target.value)}/>
            </div>
            {/* <!-- campo para telefono --> */}
            
            <div> 
                <label for="telefono"></label>
                <input type="tel" placeholder="Ingresa tu Teléfono*" className="input" value={buyerPhone} onChange = {(e) => setBuyerPhone(e.target.value)}/>  
            </div>
            {/* <!-- campo para correo --> */}
            <div>
                <label for="correoElectronico" ></label>
                <input type="email"  required placeholder="Ingresa tu Email"  className="input" value={buyerEmail} onChange = {(e) => setBuyerEmail(e.target.value)}/>
            </div>
                
                {/* <!-- campo para boton enviar --> */}
            <button type="submit" onClick={createOrder} className="boton bg-black" style={{width:'470px'}}>Generar orden</button>
        </form>
        <ToastContainer autoClose={5000}/>
        </div>
        </>
    )
}

export default Checkout
