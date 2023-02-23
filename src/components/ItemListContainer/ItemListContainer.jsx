import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import book from './assets/libros.jpeg'
import librosLocal from './assets/librosLocal.jpeg'
import cole from './assets/cole.jpeg'
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)
    useEffect(()=>{

        const asyncFunction = categoryId? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response=>{
            setProducts(response)
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
        <div id="carouselExampleInterval" className='carousel slide d-flex justify-content-center' data-bs-ride="carousel">
            <div className='carousel-inner'>
            <div className="carousel-item active" data-bs-interval="10000">
                <img src={book} className="d-block w-100" alt="libro"/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src={librosLocal} className="d-block w-100" alt="libros"/>
            </div>
            <div className="carousel-item">
                <img src={cole} className="d-block w-100" alt="libros escolares"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
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
