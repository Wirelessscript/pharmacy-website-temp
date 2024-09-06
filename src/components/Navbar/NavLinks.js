import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ( {isClicked, closeMenu} ) => {
    return (
        <nav className='NavLinks'>
            <ul>
                <li onClick={() => isClicked && closeMenu()}>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li onClick={() => isClicked && closeMenu()}>
                    <NavLink to="/about">About Us</NavLink>
                </li>
                <li onClick={() => isClicked && closeMenu()}>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li onClick={() => isClicked && closeMenu()}>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;