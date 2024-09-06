import React from 'react';
import NavLinks from './NavLinks';
import Logo from '../images/logo.png'

const DesktopNavigation = () => {
    return (
        <nav className='DesktopNavigation'>
            <img src={Logo} alt='Logo'></img>
            <NavLinks />
        </nav>
    );
};

export default DesktopNavigation;