import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import book from './assets/libros.jpeg'
import librosLocal from './assets/librosLocal.jpeg'
import cole from './assets/cole.jpeg'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'





const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(()=>{
        
        
        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')
        
        getDocs(collectionRef).then(response=>{
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()

                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [categoryId])

    if(loading){
        return <h1>Cargando...</h1>
    }

    
    return (
    <div>
        <h1 className='greeting'>{greeting}</h1>
        <div id="carouselExampleCaptions"  className='carousel slide d-flex justify-content-center' data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
            <div className='carousel-inner'>
            <div className="carousel-item active " data-bs-interval="10000">
                <img src={'https://turismo.buenosaires.gob.ar/sites/turismo/files/libreria_ateneo_grand_splendid_telon_1200_2.jpg'} className="d-block w-100" alt="libro"/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src={book} className="d-block w-100" alt="libros"/>
            </div>
            <div className="carousel-item">
                <img src={'https://www.okchicas.com/wp-content/uploads/2018/10/libros-cortos.jpg'} className="d-block w-100" alt="libros escolares"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        <h2 className='title'>Listado de productos</h2>
        <ItemList products = {products}/>
    </div>
    )
}

export default ItemListContainer
