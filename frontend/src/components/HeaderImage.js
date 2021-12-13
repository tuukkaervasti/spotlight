import React from "react";
import AronHeader from "../images/headerimages/aron_header.jpg";

const HeaderImage = (props) => {
    return (
    <div className="individual-container">
        <section class="header-box">
                        <img className="header"src={props.image} alt="aron"></img>
                    </section> 
    </div>
    )
}

export default HeaderImage;