import React from "react";
import HeaderImage from "../components/HeaderImage.js";
import Interview from "../components/Interview.js";
import ReactPlayer from "react-player";
import Header from "../components/Header";

import Ray2 from "../images/ray2.jpg";
import Ray3 from "../images/ray3.jpg";
import RayHeader from "../images/headerimages/ray_header.jpg"; 


const Ray = () => {
    return (
        
        <div className="aron">
            <HeaderImage image={ RayHeader }/>
            
            <Header header="Ray" />

            <Interview text='-My name is Ray Molina. I’m an electronic musician from Southern California.'/>
            
            <ReactPlayer className="reactPlayer" url="https://vimeo.com/656808655" 
            controls="true;" 
            width="1000px"
            height="563px"
            />
            
            <Interview text="-I would like for people to see me as genuine, trustworthy, empathetic, someone who always follows their values. "/>
            
            <img className="juttuImage" src={Ray2}></img>
            
            <Interview text="-The ideal world would have no narcissists, people wouldn’t follow their egos. 
            There’d be no ill intentions towards people. Everyone would have empathy for each other."/>
            
            <img className="pystyImage" src={Ray3}></img>
            
            <Interview text="-My life is pretty great, to be honest, but I think we’re all our own worst enemy. 
            I think that we get in our own way and I think I’m too hard on myself.  I think, in the end, if I was less hard on myself 
            and trusting myself and my instincts more, life would be better. "/>
            </div>
           
            
            
    );
};

export default Ray;