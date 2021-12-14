import React from "react";
import { Link } from "react-router-dom";

import aron from "../images/aron.jpg"
import benjamin from "../images/benjamin.jpg"
import cecilia from "../images/cecilia.jpg"
import jori from "../images/jori.jpg"
import amir from "../images/amir.jpg"
import ray from "../images/ray.jpg";


// Front page grid view with preview images of all the people photographed

// !! Will template these out once the other content is done !! 

function Grid() {

    return(
        <div className="container">
            <div className="item">
                <Link to="/aron">
                    <section class="box">
                        <figure>
                        <img src={aron} alt="aron"></img>
                        <figcaption class="caption-text">Aron</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>

            <div className="item">
                <Link to="/benjamin">
                    <section class="box">
                        <figure>
                        <img src={benjamin} alt="benjamin"></img>
                        <figcaption class="caption-text">Benjamin</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>

            <div className="item">
                <Link to="/cecilia">
                    <section class="box">
                        <figure>
                        <img src={cecilia} alt="cecilia"></img>
                        <figcaption class="caption-text">Cecilia</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>

            <div className="item">
                <Link to="/ray">
                    <section class="box">
                        <figure>
                        <img src={ray} alt="ray"></img>
                        <figcaption class="caption-text">Ray</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>

            <div className="item">
                <Link to="/jori">
                    <section class="box">
                        <figure>
                        <img src={jori} alt="jori"></img>
                        <figcaption class="caption-text">Jori</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>

            <div className="item">
                <Link to="/amir">
                    <section class="box">
                        <figure>
                        <img src={amir}alt="amir"></img>
                        <figcaption class="caption-text">Amir</figcaption>
                        </figure>
                    </section> 
                </Link>
            </div>

            


        </div>

        
    )
}

export default Grid;

