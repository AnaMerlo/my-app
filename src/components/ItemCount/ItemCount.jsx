import { useState } from "react";
import React from 'react'
import './ItemCount.css';

const ItemCount = ({onAdd, stock, initial}) => {
    const [result, setResult] = useState(0)
    const [value, setValue] = useState(initial)

    const sumar = () => {
        if (value < stock) {
            setValue(value + 1);
            setResult(value + 1)
        }
    }
    
    const restar = () =>{
        if(value > 1){
            setValue(value - 1)
            setResult(value - 1)
        }
    }
    
    return (
    <div>
        <h1>{result}</h1>
        <button style={{borderBottomLeftRadius:'2rem', borderTopLeftRadius:'2rem'}} onClick={restar}>-</button>
        <input className="input" value={value} onChange = {(e) => setValue(e.target.value)}/>
        <button style={{borderBottomRightRadius:'2rem', borderTopRightRadius:'2rem'}} onClick={sumar}>+</button>
        <button className="boton" onClick={() => onAdd(value)}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount

