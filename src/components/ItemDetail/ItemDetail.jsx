import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({img, name, category, price, description, stock}) => {

    const handleOnAdd = (value) =>{
        console.log(`se agrego ${value}`);
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
            <ItemCount onAdd = {handleOnAdd} stock = {stock} initial = {1}/>
        </div>
    )
}

export default ItemDetail
