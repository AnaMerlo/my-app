import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../services/firestore/products'
import { useAsync } from '../../hooks/useAsync';
import './ItemDetailContainer.css'
import { Ring } from '@uiball/loaders'

<Ring 
 size={40}
 lineWeight={5}
 speed={2} 
 color="black" 
/>

const ItemDetailContainer = () => {
    
    
    const { productId } = useParams()

    const { getProductById } = useProducts()

    const getProductxId = () => getProductById(productId)

    const { data: products, error, loading } = useAsync(getProductxId, [productId])


    if(loading){
        return (
          <>
          <div style={{textAlign: 'center'}}>
        <svg
        class="ring"
        viewBox="25 25 50 50"
        stroke-width="5"
      >
        <circle cx="50" cy="50" r="20" />
      </svg>
      </div>
      <h2>Obteniendo datos...</h2>
      </>
      )
    }

    if(error){
        return <h1>Hubo un error...</h1>
    }

    return (
        <div className='h-vh'>
        
        <ItemDetail {...products}/> 
        
        </div>
    )
}

export default ItemDetailContainer


