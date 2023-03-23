import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()
    console.log(productId)

    useEffect(()=>{

        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(response=>{
            
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProducts(productAdapted)
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


