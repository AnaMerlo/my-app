import React from 'react'
import logo from './assets/logo-book.png'
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
    <div className='dis'>
        <nav className='navbar navbar-expand-lg' style={{width: '80%'}}>
            <div className='container-fluid'>
            <img className='logo' src={logo} alt='logo'/>
            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-center' id="navbarNavAltMarkup">
                <div className='navbar-nav'>
                <a className='nav-link'href="#">Libros y comics</a>
                <a className='nav-link' href="#">Música y películas</a>
                <a className='nav-link' href="#">Manga</a>
                </div>
            </div>
            </div>
            <CartWidget/>
        </nav>
    </div>
    )
}

export default Navbar
