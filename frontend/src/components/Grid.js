import React from "react";
import { Link } from "react-router-dom";

import akeem from "../images/akeem.jpg"
import benjamin from "../images/ben.jpg"
import cecilia from "../images/cecilia.jpg"
import gustaf from "../images/gustaf.jpg"
import jori from "../images/jori.jpg"
import tracey from "../images/tracey.jpg"

function Grid() {

    return(
        <div className="container">
            <div className="item">
            <Link to="./akeem">
                <img src={akeem}></img>
            </Link>
            </div>
            <div className="item">
            <img src={benjamin}></img>
            </div>
            <div className="item">
            <img src={cecilia}></img>
            </div>
            <div className="item">
            <img src={gustaf}></img>
            </div>
            <div className="item">
            <img src={tracey}></img>
            </div>
            <div className="item">
            <img src={jori}></img>
            </div>
        </div>
    )
}

export default Grid;

