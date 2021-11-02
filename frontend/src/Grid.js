import React from "react";
import akeem from "./images/akeem.jpg"

function Grid() {

    return(
        <div className="container">
            <div className="item">Tuukka
            <img src={akeem}></img>
            </div>
            <div className="item">Benjamin</div>
            <div className="item">Tuukka</div>
            <div className="item">Tuukka</div>
            <div className="item">Tuukka</div>
            <div className="item">Tuukka</div>
        </div>
    )
}

export default Grid;
