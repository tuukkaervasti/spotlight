import React from "react";
import { Link } from "react-router-dom";

import akeem from "../images/akeem.jpg"
import benjamin from "../images/ben.jpg"
import cecilia from "../images/cecilia.jpg"
import gustaf from "../images/gustaf.jpg"
import jori from "../images/jori.jpg"
import tracey from "../images/tracey.jpg"


// Front page grid view with preview images of all the people photographed

// !! Will template these out once the other content is done !! 

function Grid() {

    return(
        <div className="container">
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            <div className="item">
                <Link to="/akeem">
                    <section class="box">
                        <figure>
                        <img src={akeem}></img>
                        <figcaption class="caption-text">Akeem</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>
            
        </div>
    )
}

export default Grid;

