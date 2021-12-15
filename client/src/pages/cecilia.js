import React from "react";
import HeaderImage from "../components/HeaderImage.js";
import Interview from "../components/Interview.js";
import ReactPlayer from "react-player";
import Header from "../components/Header";

import Cecilia2 from "../images/cecilia2.jpg";
import Cecilia3 from "../images/cecilia3.jpg";
import CeciliaHeader from "../images/headerimages/cecilia_header.jpg"; 


const Cecilia = () => {
    return (
        
        <div className="aron">
            <HeaderImage image={ CeciliaHeader }/>

            <Header header="Cecilia" />
            
            <Interview text='-I’m Cecilia, a 20 something year old young woman from Helsinki, currently living in Turku and studying to become 
            a paramedic and perhaps sometime in the future I’ll study to become a graduate engineer.'/>
            
            <ReactPlayer className="reactPlayer" url="https://vimeo.com/656810192" 
            controls="true;" 
            width="1000px"
            height="563px"
            />
            
            <Interview text="-I would like for other people to see me as someone who’s naturally beautiful on the inside, someone who is 
nice and takes everyone into consideration and leaves nobody alone. "/>
            
            <img className="juttuImage" src={Cecilia2}></img>
            
            <Interview text="-I think an ideal world would be one where everyone is able to feel good and be treated in a fair and equal
manner. "/>
            
            <img className="pystyImage" src={Cecilia3}></img>
            
            <Interview text="-One concrete thing that would make my life better would be another school I could get into so perhaps
The graduate engineer thing or a spot at a medical university."/>
            </div>
           
            
            
    );
};

export default Cecilia;