import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../components/HomeCard.css";

function HomeCard(props)
{
    if(props.external)
    {
        return(
            <div className="homeCard">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <a href="https://en.bc.fi/qualifications/full-stack-web-developer-program/">{props.linkText}</a>
            </div>
        );
    } else 
    {
        return(
            <div className="homeCard">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <Link to={props.link}>{props.linkText}</Link>
            </div>
        );
    }    
}

HomeCard.propTypes = {
    title : PropTypes.string,
    text : PropTypes.string,
    linkText : PropTypes.string,
    link : PropTypes.string,
    external : PropTypes.bool
}

export default HomeCard;