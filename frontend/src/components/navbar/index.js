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
                <NavLink to ="/about" activeStyle>
                About
                </NavLink>
                <NavLink to ="/project" activeStyle>
                Project
                </NavLink>
            </NavMenu>
        </Nav>
    </React.Fragment>
    );
};

export default Navbar;

