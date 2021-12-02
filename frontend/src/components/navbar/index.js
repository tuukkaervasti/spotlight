import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
}   from "./NavbarElements";

const Navbar = () => {
    return (
        <React.Fragment>
            <Nav>
                
                <Bars />
                <NavLink className="logo" to ="/project">
                Spotlight on humanity    
                </NavLink>                
                <NavMenu>

               
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

