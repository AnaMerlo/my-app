import React from 'react'
import cart from './assets/cart.svg'
import './CartWidget.css';

const CartWidget = () => {
    return (
    <div className='cart'>
        <img className='carrito' src={cart} alt='carrito'/>
        10
    </div>
    )
}

export default CartWidget
