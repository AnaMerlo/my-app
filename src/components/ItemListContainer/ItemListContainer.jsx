import React from 'react'
import './ItemListContainer.css';
import book from './assets/libros.jpeg'
import librosLocal from './assets/librosLocal.jpeg'
import cole from './assets/cole.jpeg'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../services/firestore/products'

import { useAsync } from '../../hooks/useAsync';
import { Ring } from '@uiball/loaders'

<Ring 
 size={40}
 lineWeight={5}
 speed={2} 
 color="black" 
/>




const ItemListContainer = ({greeting}) => {

    const { categoryId } = useParams()

    const { getProduct } = useProducts()
    
    const getProductsOfCategory = () => getProduct(categoryId)

    const { data: products, error, loading } = useAsync(getProductsOfCategory, [categoryId])

    if(loading){
        return (
            <div style={{textAlign: 'center'}}>
        <svg
        class="ring"
        viewBox="25 25 50 50"
        stroke-width="5"
        >
        <circle cx="50" cy="50" r="20" />
        </svg>
            </div>
        )
    }

    if(error){
        return <h1>Hubo un error...</h1>
    }
    
    return (
    <div style={{height: '199vh'}}>
        <h1 className='greeting'>{greeting}</h1>
        <div id="carouselExampleCaptions"  className='carousel slide d-flex justify-content-center' data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className='slider'>
            <div className='carousel-inner'>
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={'https://turismo.buenosaires.gob.ar/sites/turismo/files/libreria_ateneo_grand_splendid_telon_1200_2.jpg'} className="d-block slider__img" alt="libro"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={'https://www.clarin.com/img/2016/11/04/ryGEGahF4g_1256x620.jpg'} className="d-block slider__img" alt="libros"/>
                </div>
                <div className="carousel-item">
                    <img src={'https://www.okchicas.com/wp-content/uploads/2018/10/libros-cortos.jpg'} className="d-block slider__img" alt="libros escolares"/>
                </div>
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
