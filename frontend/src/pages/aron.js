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
            
            <Interview text="I’m Aron, aka Akeem, a 27-year old music producer and studio technician from Eastern Helsinki. 
            I’ve been doing music stuff for the past 7 or 8 years, day in day out."/>
            
            <ReactPlayer className="reactPlayer" url="https://vimeo.com/646173014" 
            controls="true;" 
            width="1000px"
            height="563px"
            />
            
            <Interview text="Aron gets up in the morning, Akeem goes to the studio, Akeem goes home from the studio, Aron goes to sleep. 
            Akeem is the one who goes to the club for the gig and who produces the track, Aron is the one who my mom complains to 
            
            about not taking the dog out enough etc."/>
            <img className="juttuImage" src={Aron2}></img>
            
            <Interview text="But don't forget me here!"/>
            
            <img className="pystyImage" src={Aron3}></img>
            
            <Interview text="The last of me"/>
            
            </div>
           
            
            
    );
};

export default Aron;