import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {  useCart } from '../../context/CartContext';



// import Item from '../Item/Item';
// import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const navigate = useNavigate()
    const { cart, totalTopay, clearCart } = useCart()


    if(totalTopay === 0){
        return(
            <div>
                <h1>
                    No hay productos en el carrito
                </h1>
                <Link className='boton' to={'/'}>Seguir comprando</Link>
            </div>
        )
    }
    return (
        <div>
        <h1>Tus productos</h1> 
            
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
            <button className="boton bg-black" onClick={() => clearCart()}>Vaciar</button>
            <button onClick={() => navigate ('/checkout')}>checkout</button>
        </div>
    )
}

export default Cart
