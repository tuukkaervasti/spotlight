import React from "react";
import Taike from "../images/taike.png";
import BC from "../images/bc-logo.png";



const About = () => {
    return (
        
        <div className="about-box">
            {/* <h1 className="about-header">SPOTLIGHT ON HUMANITY</h1> */}
            <p className="about-paragraph">
             "Spotlight on humanity" is a project about hopes and wishes. It's about people and humanity. The project gives a platform for people to 
             talk about their visions of the world and their hopes of how to be seen in it.     
             It's an evergrowing collection of images and videos of different people around the world. 
             <br></br>
             <br></br>
             The people all answer the same three questions: 
             <br></br>
             <br></br>
            <ul className="kysymykset">
                <li>How would you like other people to see you as?</li>
                <li>What is your ideal version of the world?</li>
                <li>Can you think one concrete example of something that would make your life better?</li>
            </ul>
             <br></br>
            The project got its initial start during the summer 2019 in Seattle, Washington. 
            During that time, the focus was solely on people living the United States of America.
            Shortly after, the COVID pandemic hit the entire world and effectively stopped all travel. 
            As such, I was forced to make changes if I wanted to keep the project going. 
            <br></br>
            <br></br>
            From this situation the project evolved into its current form with focus on the entire world. 
            However, being based in Finland, I have been able to photograph only in Finland during the pandemic. 
            At the time of writing (December 2021), the world is slowly starting to open up again. 
            This means I will hopefully be able to expand outside of just Finland. 
            <br></br>
            <br></br>
            Expansion is important since humanity covers the entire planet and the founding idea for the project is to 
            highlight our similarities; our hopes and dreams. These are what connect us and what makes us all one. Going forward, I will keep adding to the project 
            as I'm able to travel more and expand the inclusivity of the entire project and its platform.
            <br></br>
            <br></br>
            There are plenty of multimedia projects that focus on the various crisis around the world as well as the 
            problems we face. While it is a valid approach and it's important to highlight the issues and negative aspects that come with living in a highly unequal world, for this project I have consciously wanted to keep it somewhat naive, simple and innocent. 
            Who do we want to be? How do we want other people to see us? What are the ingredients to an ideal world? People are free to describe their hopes and wishes - as they wish. 
            <br></br>
            <br></br>
            I feel there is room for that in the world and it should be heard. We are more alike one another than we are different. 
            <br></br>
            <br></br>
            "Spotlight on humanity" is sponsored by <a className="about-links"href="http://www.taike.fi">Taike</a> (Taiteen edistämiskeskus) and is also part of a education programme (Datanomi) from 
            <a className="about-links"href="https://en.bc.fi/"> Business College Helsinki.</a>
            <br></br>
            <br></br>
            "Spotlight on humanity" is an original project by <a className="about-links"href="http://www.tuukkaervasti.com"> Tuukka Ervasti</a>.
            </p>
            <img className="taikelogo" src={Taike}></img>
        </div>
           
            
            
    );
};

export default About;