import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Logo from '../images/logo.png'
import NavLinks from './NavLinks';

const MobileNavigation = () => {
    const [click, setclick] = useState(false);

    const Hamburger = <GiHamburgerMenu className='HamburgerMenu'
                        size='30px' color='Black'
                        onClick={() => setclick(!click)} />

    const Close = <IoMdClose className='HamburgerMenu'
                    size='30px' color='Black'
                    onClick={() => setclick(!click)} />

    const closeMenu = () => setclick(false);

    return (
        <nav className='MobileNavigation'>
            <img src={Logo} alt='Logo'></img>
            { click ? Close : Hamburger}
            { click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
        </nav>
    );
};

export default MobileNavigation;