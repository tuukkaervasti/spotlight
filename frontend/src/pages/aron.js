import React from "react";
import HeaderImage from "../components/HeaderImage.js";
import Interview from "../components/Interview.js";
import ReactPlayer from "react-player";
import Header from "../components/Header";

import Aron2 from "../images/aron2.jpg";
import Aron3 from "../images/aron3.jpg";
import AronHeader from "../images/headerimages/aron_header.jpg"; 



const Aron = () => {
    return (
        
        <div className="aron">
            
            <HeaderImage image={AronHeader} />
            
            <Header header="Aron" />

            <Interview text='- "I’m Aron, aka Akeem, a 27-year old music producer and studio technician from Eastern Helsinki. 
            I’ve been doing music stuff for the past 7 or 8 years, day in day out."'/>
            
            <ReactPlayer className="reactPlayer" url="https://vimeo.com/646173014" 
            controls="true;" 
            width="1000px"
            height="563px"
            />
            
            <Interview text="- Aron gets up in the morning, Akeem goes to the studio, Akeem goes home from the studio, Aron goes to sleep. 
            Akeem is the one who goes to the club for the gig and who produces the track, Aron is the one who my mom complains to 
            about not taking the dog out enough etc."/>
            
            <img className="juttuImage" src={Aron2}></img>
            
            <Interview text="I hope others would see me as loyal, intelligent, honest and straight forward dude who can be counted on for 
            help or whatever is needed. I hope people see me as I see myself and as my mom sees me. I hope people see me as my dog sees me; 
            shoutout to Elmo! "/>
            
            <img className="pystyImage" src={Aron3}></img>
            
            <Interview text="My ideal vision of the world is not one where all the hardships are erased from people’s lives but one where 
            communities work together to solve problems instead of blaming others or claiming how it’s not their responsibility 
            to help while still complaining about the problems. Each one teach one, I think that’s the ideal world, where people 
            all work towards a common goal regardless of any socioeconomic status or so called predetermined “box” into which one may have born"/>
            </div>
           
            
            
    );
};

export default Aron;