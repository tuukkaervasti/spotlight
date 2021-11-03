import React from "react";
import akeem from "./images/akeem.jpg"
import benjamin from "./images/ben.jpg"
import cecilia from "./images/cecilia.jpg"
import gustaf from "./images/gustaf.jpg"
import jori from "./images/jori.jpg"
import tracey from "./images/tracey.jpg"

function Grid() {

    return(
        <div className="container">
            <div className="item">Akeem
            <img src={akeem}></img>
            </div>
            <div className="item">Benjamin
            <img src={benjamin}></img>
            </div>
            <div className="item">Cecilia
            <img src={cecilia}></img>
            </div>
            <div className="item">Gustaf
            <img src={gustaf}></img>
            </div>
            <div className="item">Jori
            <img src={jori}></img>
            </div>
            <div className="item">Tracey
            <img src={tracey}></img>
            </div>
        </div>
    )
}

export default Grid;
