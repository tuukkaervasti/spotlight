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

            <Interview text='-My name is Ben, my stage name is Bentality. I’m 26 years old, I live in Helsinki, Finland. 
My father is American and my mother is from Finland. I’m a musician. I make hip-hop, rnb, soul type of music.'/>
            
            <ReactPlayer className="reactPlayer" url="https://vimeo.com/586233272" 
            controls="true;" 
            width="1000px"
            height="563px"
            />
            
            <Interview text="-I would like for people to think of me as a kind hearted and open hearted person who thinks for himself and for other people as well. 
            I would like to be seen as a helpful person, fun person to be around with. Somebody that has a sense of humour. But most importantly, 
            I would like to be seen as a human being amongst other human beings."/>
            
            <img className="juttuImage" src={Benjamin2}></img>
            
            <Interview text="-An ideal world for me would be one without racism, one without a pandemic. No famine, no war, of course. People of all cultures, 
            all religions, all races - should be able to live in peace and should not feel like they aren’t allowed to be who they are."/>
            
            <img className="pystyImage" src={Benjamin3}></img>
            
            <Interview text="-Can I name a concrete example of what could change my life for the better? One concrete thing that comes to mind is not necessarily a 
            change, but to be able to live a life knowing that you are appreciated by the people around you - instead of only tolerated. As simple as that."/>
            </div>
           
            
            
    );
};

export default Benjamin;