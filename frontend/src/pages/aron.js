import React from "react";
import HeaderImage from "../components/HeaderImage.js";
import Interview from "../components/Interview.js";
import ReactPlayer from "react-player";
import Aron2 from "../images/aron2.jpg";
import Aron3 from "../images/aron3.jpg";



const Aron = () => {
    return (
        
        <div className="aron">
            <HeaderImage />
            <Interview />
            <ReactPlayer className="reactPlayer" url="https://vimeo.com/646173014" 
            controls="true;" 
            width="1000px"
            height="563px"
            
            />
            <img className="juttuImage" src={Aron2}></img>
            <img className="pystyImage" src={Aron3}></img>
            </div>
           
            
            
    );
};

export default Aron;