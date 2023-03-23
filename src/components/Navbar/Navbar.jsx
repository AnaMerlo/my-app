import React from 'react'
import logo from './assets/logo-book.png'
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <div className='dis'>
        <nav className='navbar navbar-expand-lg' style={{width: '80%'}}>
            <div className='container-fluid'>
            <NavLink to={'/'}>
            <img className='logo' src={logo} alt='logo'/>
            </NavLink>
            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-center' id="navbarNavAltMarkup">
                <div className='navbar-nav gap-3'>
                <NavLink to={'/category/Escolar'} className={({isActive}) => isActive? 'active' : 'nav-link'}>Libros y comics</NavLink>
                <NavLink to={'/category/Novela'}  className={({isActive}) => isActive? 'active' : 'nav-link'} >Novelas y películas</NavLink>
                <NavLink to={'/category/Manga'} className={({isActive}) => isActive? 'active' : 'nav-link'} >Manga</NavLink>
                </div>
            </div>
            </div>
            <CartWidget/>
        </nav>
    </div>
    )
}

export default Navbar
