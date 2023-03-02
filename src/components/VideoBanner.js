import React from 'react';
import { Link } from "react-router-dom";
import "../components/VideoBanner.css";

function VideoBanner()
{
    return(
        <div className="bannerContainer" data-testid="bannerContainer">
            <div className="thingsContainer">
                <h1 id="welcomeMessage">World of recepies</h1>
                <h3>Explore the best side of the world</h3>
                <Link className="bannerButton" to="recipelist">Check out all recipies</Link>
            </div>
            <video autoPlay="autoplay" muted={true} loop={true} className="videoBanner">
                <source src={require("../Assets/video.mp4")} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoBanner;