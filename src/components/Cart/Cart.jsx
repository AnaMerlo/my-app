import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {  useCart } from '../../context/CartContext';
import './Cart.css'

import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const navigate = useNavigate()
    const { cart, totalTopay, clearCart } = useCart()


    if(totalTopay === 0){
        return(
            <div>
                <h1 style={{fontWeight:'bold'}}>
                    No hay productos en el carrito
                </h1>
                <Link className='boton' to={'/'}>Seguir comprando</Link>
            </div>
        )
    }
    return (
        <div>
        <h1 style={{fontSize:'1.5rem', marginBottom: '2rem', textAlign:'center'}}>Tus productos</h1> 
            
            <table className="table">
                <thead >
                    <tr>
                        <th scope="col" style={{width:'300px'}} >Producto</th>
                        <th scope="col" style={{width:'300px'}} >Precio</th>
                        <th scope="col" style={{width:'300px'}} >Cantidad</th>
                        <th scope="col" style={{width:'300px'}} >subtotal</th>
                        <th scope="col" style={{width:'300px'}} >Eliminar</th>
                    </tr> 
                </thead>
            </table>
            
            {cart.map(prod => <ItemCart key = {prod. id} {...prod}/>)}
            <table style={{display:'flex', justifyContent:'flex-end'}}>
                <tfoot>
                    <tr>
                        <th scope="row" style={{width:'300px'}}>TOTAL</th>
                        <td style={{width:'300px'}}>${totalTopay}</td>
                    </tr>
                </tfoot>
            </table>
            <div className='div__flex'>
            <button className="boton bg-red" style={{width:'470px'}} onClick={() => clearCart()}>Vaciar</button>
            <button className="boton" style={{width:'470px'}} onClick={() => navigate ('/checkout')}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart
