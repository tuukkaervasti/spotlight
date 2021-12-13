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
            <Interview text="I'm here, boy!"/>
            <ReactPlayer className="reactPlayer" url="https://vimeo.com/646173014" 
            controls="true;" 
            width="1000px"
            height="563px"
            
            />
            <Interview text="And also here!"/>
            <img className="juttuImage" src={Aron2}></img>
            <Interview text="But don't forget me here!"/>
            <img className="pystyImage" src={Aron3}></img>
            </div>
           
            
            
    );
};

export default Aron;