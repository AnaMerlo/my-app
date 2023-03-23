import React from 'react'
import { useCart } from '../../context/CartContext'
import cart from './assets/cart.svg'
import './CartWidget.css';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {

    const navigate = useNavigate()

    const { totalProductsAdded } = useCart()

    return (
    <button className='cart' onClick={() => navigate ('/cart')}>
        <img className='carrito' src={cart} alt='carrito'/>
        {totalProductsAdded}
        
    </button>
    )
}

export default CartWidget
