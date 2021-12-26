import React from 'react';
import NavMenu from './NavMenu/NavMenu';
import NavCartProfile from './NavCartProfile/NavCartProfile';
import { NavContainer } from "./NavStyle";



const Nav = () => {
    return (
        <header>
            <NavContainer>
                <NavMenu />
                <NavCartProfile />
            </NavContainer>
        </header>
    )
}

export default Nav;