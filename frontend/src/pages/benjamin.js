import React from "react";
import HeaderImage from "../components/HeaderImage.js";
import Interview from "../components/Interview.js";
import ReactPlayer from "react-player";
import Header from "../components/Header";

import Benjamin2 from "../images/benjamin2.jpg";
import Benjamin3 from "../images/benjamin3.jpg";
import BenjaminHeader from "../images/headerimages/benjamin_header.jpg"; 


const Benjamin = () => {
    return (
        
        <div className="aron">
            <HeaderImage image={ BenjaminHeader }/>
            
            <Header header="Benjamin" />

            <Interview text='- "I’m Aron, aka Akeem, a 27-year old music producer and studio technician from Eastern Helsinki. 
            I’ve been doing music stuff for the past 7 or 8 years, day in day out."'/>
            
            <ReactPlayer className="reactPlayer" url="https://vimeo.com/586233272" 
            controls="true;" 
            width="1000px"
            height="563px"
            />
            
            <Interview text="- Aron gets up in the morning, Akeem goes to the studio, Akeem goes home from the studio, Aron goes to sleep. 
            Akeem is the one who goes to the club for the gig and who produces the track, Aron is the one who my mom complains to 
            about not taking the dog out enough etc."/>
            
            <img className="juttuImage" src={Benjamin2}></img>
            
            <Interview text="I hope others would see me as loyal, intelligent, honest and straight forward dude who can be counted on for 
            help or whatever is needed. I hope people see me as I see myself and as my mom sees me. I hope people see me as my dog sees me; 
            shoutout to Elmo! "/>
            
            <img className="pystyImage" src={Benjamin3}></img>
            
            <Interview text="My ideal vision of the world is not one where all the hardships are erased from people’s lives but one where 
            communities work together to solve problems instead of blaming others or claiming how it’s not their responsibility 
            to help while still complaining about the problems. Each one teach one, I think that’s the ideal world, where people 
            all work towards a common goal regardless of any socioeconomic status or so called predetermined “box” into which one may have born"/>
            </div>
           
            
            
    );
};

export default Benjamin;