import React, { useEffect, useState } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()
    console.log(productId)

    useEffect(()=>{
        getProductsById(productId).then(response=>{
            setProducts(response)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

    if(loading){
        return <h1>Cargando...</h1>
    }

    return (
        <div>
        
        <ItemDetail {...products}/> 
        
        </div>
    )
}

export default ItemDetailContainer


