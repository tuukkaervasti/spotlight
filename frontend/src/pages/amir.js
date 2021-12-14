import React from "react";
import HeaderImage from "../components/HeaderImage.js";
import Interview from "../components/Interview.js";
import ReactPlayer from "react-player";
import Header from "../components/Header";

import Amir2 from "../images/amir2.jpg";
import Amir3 from "../images/amir3.jpg";
import AmirHeader from "../images/headerimages/amir_header.jpg"; 


const Amir = () => {
    return (
        
        <div className="aron">
            <HeaderImage image={ AmirHeader }/>
            
            <Header header="Amir" />

            <Interview text='I’m Amir. Some people know me as Loasteeze, Steezy, työmyyrä. I’m a 25 year old hip-hop DJ and producer from Helsinki. '/>
            
            <ReactPlayer className="reactPlayer" url="https://vimeo.com/586233272" 
            controls="true;" 
            width="1000px"
            height="563px"
            />
            
            <Interview text="I would for people to see me as productive and as a positive person who’s friends with everybody. 
            That’s what I hope people would be left with; the feeling of meeting someone nice." />
            
            <img className="juttuImage" src={Amir2}></img>
            
            <Interview text="In my view, the ideal world is one where everyone is free. They’re free to love and free to do what they want. 
            There wouldn’t be war or famine, major negative things wouldn’t exist and we would all be equal."/>
            
            <img className="pystyImage" src={Amir3}></img>
            
            <Interview text="One concrete thing that would make my life better would be that all the illnesses that the people I’m close to suffer from, would no 
            longer exist. That would improve my life, too"/>
            </div>
           
            
            
    );
};

export default Amir;