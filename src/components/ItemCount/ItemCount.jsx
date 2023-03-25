import { useState } from "react";
import React from 'react'
import './ItemCount.css';

const ItemCount = ({onAdd, stock = 0, initial = 1}) => {
    
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
            
        }
    }
    
    const decrement = () =>{
        if(quantity > 1){
            setQuantity(quantity - 1)
            
        }
    }
    
    return (
    <div>
        <button style={{borderBottomLeftRadius:'2rem', borderTopLeftRadius:'2rem'}} onClick={decrement}>-</button>
        <input className="inputCount" value={quantity} onChange = {(e) => setQuantity(e.target.quantity)}/>
        <button style={{borderBottomRightRadius:'2rem', borderTopRightRadius:'2rem'}} onClick={increment}>+</button>
        <button className="boton" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount

