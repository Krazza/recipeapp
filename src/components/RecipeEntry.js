import React from "react";
import "../components/RecipeEntry.css";
import { Link } from "react-router-dom";

function RecipeEntry(props)
{
    //flag pic
    return(
        <div className="recipeCard">
            <div id="overlay"/>
            <img id="recipeImg" src={props.image} alt="meaningful text"></img>
            <img id="flag" src={props.flag} alt="meaningful text"/>
            <Link to={`${props.id}`}><h3>{props.name}</h3></Link>
        </div>
    );
}

export default RecipeEntry;