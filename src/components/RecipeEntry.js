import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import "../components/RecipeEntry.css";

const RecipeEntry = (props) => {
    return (
        <div className="recipeCard" data-testid = {props.testid}>
        <div id="overlay"/>
        <img id="recipeImg" src={props.image} alt="meaningful text"></img>
        <img id="flag" src={props.flag} alt="meaningful text"/>
        <Link to={`${props.id}`}><h3>{props.name}</h3></Link>
    </div>
    );
};

RecipeEntry.propTypes = {
    key : PropTypes.string,
    image :  PropTypes.string,
    flag : PropTypes.string,
    id : PropTypes.number,
    name : PropTypes.string
}

export default RecipeEntry;