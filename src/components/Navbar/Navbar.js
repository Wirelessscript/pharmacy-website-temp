import React from 'react';
import MobileNavigation from './MobileNavigation';
import './Navbar.css'
import DesktopNavigation from './DesktopNavigation';



const Navbar = () => {
    return (
        <nav>
        <MobileNavigation />
        <DesktopNavigation />
        </nav>
    );
};

export default Navbar;