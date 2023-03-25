import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext'

const ItemDetail = ({id, img, name, price, description, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProductQuantity } = useCart()

    const productQuantity = getProductQuantity(id)


    const handleOnAdd = (quantity) =>{
        setQuantity(quantity)
        const producToAdd = {
            id, name, price, quantity
        }
        addItem(producToAdd)
        toast.success(`Se agrego ${quantity} ${name} a tu carrito`, { theme:"dark"})
    }

    return (
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <div className='section__div' >
                <img className='section__img--300' src={img} alt ={name}/>
                <h1 className='section__title' style={{fontSize:'1.5rem'}}>{name}</h1>
                <p className='section__title'>Descripción: {description}</p>
                <p style={{fontWeight:'bold'}}>$ {price}</p>
                <p className='section__title'>Cantidad disponible: {stock}</p>
            </div>
            { stock !== 0 ? <ItemCount onAdd = {handleOnAdd}  stock = {stock} initial = {productQuantity}/> : <p style={{fontStyle:'normal', fontWeight:'bold'}}>NO HAY PRODUCTOS</p> }
            {/* {quantity > 0? <Link to={'/cart'} className='boton' style={{height: 100}}>Finalizar compra</Link> : <ItemCount onAdd = {handleOnAdd}  stock = {stock} initial = {productQuantity}/>} */}
            <ToastContainer autoClose={3000}/>
        </div>
    )
}

export default ItemDetail
