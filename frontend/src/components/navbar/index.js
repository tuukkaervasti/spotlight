import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink, 
}   from "./NavbarElements";

const Navbar = () => {
    return (
        <React.Fragment>
            <Nav>
                <Bars />

                <NavMenu>
                
                <NavLink to ="/project">
                Home
                </NavLink>
                <NavLink to ="/about">
                About
                </NavLink>
                <NavLink to ="/contact">
                Contact
                </NavLink>
            </NavMenu>
        </Nav>
    </React.Fragment>
    );
};

export default Navbar;

