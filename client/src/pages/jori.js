import React from "react";
import HeaderImage from "../components/HeaderImage.js";
import Interview from "../components/Interview.js";
import ReactPlayer from "react-player";
import Header from "../components/Header";

import Jori2 from "../images/jori2.jpg";
import Jori3 from "../images/jori3.jpg";
import JoriHeader from "../images/headerimages/jori_header.jpg"; 


const Jori = () => {
    return (
        
        <div className="aron">
            <HeaderImage image={ JoriHeader }/>

            <Header header="Jori" />
            
            <Interview text='-I’m Jori Tapio Kalliola, 53 years old. I was in 1968 in Rauma. I have lived in many places but the last 8 years I’ve lived in 
            a small seaside town called Hanko. I’m an “ITE” artist in the field of visual arts and I’m also a musician and a singer. 
            I have been making art for around 36 years now.'/>
            
            <ReactPlayer className="reactPlayer" url="https://vimeo.com/656805557" 
            controls="true;" 
            width="1000px"
            height="563px"
            />
            
            <Interview text="-I would want, or actually it’s not up to me, but to be seen as a human with all the qualities that come with 
            being a human - all the contradictions and such. I only want to be seen as both weak and strong and as good and bad. 
            I want people to see that I have the ability to do good, and that is always my intention, but that I am also capable of doing bad. 
            I don’t want to be seen exclusively as something specific but rather, because situations differ and people end up in different places, 
            I just want to be seen as a human. "/>
            
            <img className="juttuImage" src={Jori2}></img>
            
            <Interview text="-My vision of an ideal world is one where all people engaged in meaningful work. If you don’t want to call it work, 
            then let’s call just call it doing something meaningful. In my ideal world, nobody would be working for a faceless, big corporation 
            for next to no pay in a meaningless position just so that a certain small group of people can become completely unreasonably wealthy 
            with no real use for all that money. So, in my ideal world, we all have something of value to do and it’s meaningful to us. "/>
            
            <img className="pystyImage" src={Jori3}></img>
            
            <Interview text="-My life is better when other people have their lives improved upon, too. One concrete example would maybe be if we 
            could come up with a system where everyone is entitled to a basic salary. Everyone would be entitled to the same monetary value and on 
            top of that, everyone could do their own meaningful work (or whatever they want to call it). In terms of economic realities, it would 
            give everyone the same value and in that sense, we would all be equal. It would give each of us more time to do the things we really want to do. 
So if the society is well organised and does well, I’ll do well and so does everyone else. When everyone else around me is doing good, I’m doing good. "/>
            </div>
           
            
            
    );
};

export default Jori;