import React from 'react'
import './ItemListContainer.css';
import book from './assets/libros.jpeg'
import librosLocal from './assets/librosLocal.jpeg'
import cole from './assets/cole.jpeg'

const ItemListContainer = ({greeting}) => {
    return (
    <div>
        <h1 className='greeting'>{greeting}</h1>
        <div id="carouselExample" class='carousel slide d-flex justify-content-center'>
            <div class='carousel-inner'>
            <div class="carousel-item active">
            <img src={book} class="d-block w-100" alt="libro"/>
        </div>
        <div class="carousel-item">
            <img src={librosLocal} class="d-block w-100" alt="libros"/>
        </div>
        <div class="carousel-item">
            <img src={cole} class="d-block w-100" alt="libros escolares"/>
        </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    )
}

export default ItemListContainer
