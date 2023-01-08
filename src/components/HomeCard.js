import React from "react";
import { Link } from "react-router-dom";
import "../components/HomeCard.css";

function HomeCard(props)
{
    return(
        <div className="homeCard">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <Link to={props.link}>{props.linkText}</Link>
        </div>
    );
}

export default HomeCard;