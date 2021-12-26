import React, { useEffect, useState, useRef } from 'react';
// Styled Components
import { NavMenuContainer, NavMenuMobileBtn, NavMenuLogo, NavMenuList, NavMenuMobileBtnClose, NavMenuItem, NavMenuItemLogo } from "./NavMenuStyle";



const NavMenu = () => {

    const mobileMenuRef = useRef();
    const [mobileMenu, setMobileMenu] = useState(false);



    // Open mobile menu.
    const openMobileMenu = () => {
        setMobileMenu(true);
    }

    // Close mobile menu.
    const closeMobileMenu = () => {
        setMobileMenu(false);
    }



    // Close mobile menu on outside click.
    useEffect(() => {
        let closeMobileMenu = (event) => {
           if (!mobileMenuRef.current.contains(event.target)) {
                setMobileMenu(false);
           }
        }

        document.addEventListener("click", closeMobileMenu);
        return () => {
            document.removeEventListener("click", closeMobileMenu);
        }
    });



    return (
        <NavMenuContainer>
            <NavMenuMobileBtn onClick={openMobileMenu} src="./images/icon-menu.svg" alt="Mobile menu button"/>
            <NavMenuLogo src="./images/logo.svg" alt="Logo"/>
                <NavMenuList mobileMenu={mobileMenu} ref={mobileMenuRef}>
                    <NavMenuMobileBtnClose onClick={closeMobileMenu} src="./images/icon-close.png" alt="Mobile menu button close" />
                    <NavMenuItem>Collection</NavMenuItem>
                    <NavMenuItem>Men</NavMenuItem>
                    <NavMenuItem>Women</NavMenuItem>
                    <NavMenuItem>About</NavMenuItem>
                    <NavMenuItem>Contact</NavMenuItem>
                    <NavMenuItemLogo src="./images/logo-mobile-menu.png" alt="Mobile Menu Logo" />
                </NavMenuList>
        </NavMenuContainer>
    )
}


export default NavMenu;