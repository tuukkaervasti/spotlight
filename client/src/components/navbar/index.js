import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
}   from "./NavbarElements";

import IGlogo from "../../images/ig_logo.png";
import logo from "../../images/logo.png";

const Navbar = () => {
    return (
        <React.Fragment>
            <Nav>
                
                <Bars />
                {/* <NavLink to ="project">
                <img className="logo" src={logo} alt=""></img>

                </NavLink> */}
                <NavLink className="logo" to ="/project">
                SPOTLIGHT ON HUMANITY  
                </NavLink>                
                <NavMenu>
                <NavLink className="navigaatio-muut" to ="/about">
                About
                </NavLink>
                <NavLink className="navigaatio-muut" to ="/contact">
                Contact
                </NavLink>
                <NavLink to ={{pathname:"https://www.instagram.com/spotlightonhumanityproject/"}} target="_blank">
                <img className="ig-logo" src={IGlogo} alt=""></img>
                </NavLink>
                </NavMenu>
                
            </Nav>
    </React.Fragment>
    );
};

export default Navbar;

