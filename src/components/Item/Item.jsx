import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom'


const Item = ({id, img, name, category, price}) => {
    return (
            <div className='section__div'>
                <img className='section__img--300' src={img} alt ={name}/>
                <h1 className='section__title'>{name}</h1>
                <h3>{category}</h3>
                <p>$ {price}</p>
                <Link className='boton' to={`/detail/${id}`}>Ver detalle</Link>
            </div>
    )
}

export default Item
