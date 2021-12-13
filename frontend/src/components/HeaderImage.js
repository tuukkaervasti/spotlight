import React from "react";
import AronHeader from "../images/headerimages/aron_header.jpg";

const HeaderImage = () => {
    return (
    <div className="individual-container">
        <section class="header-box">
                        <img className="header"src={AronHeader} alt="aron"></img>
                    </section> 
    </div>
    )
}

export default HeaderImage;