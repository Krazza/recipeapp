import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeEntry from "./RecipeEntry.js";
import "./RecipeList.css";

function RecipeList()
{
    const [data, setData] = useState([]);//search by includes

    useEffect(() => 
    { 
        axios.get("http://localhost:3001/savedrecipies").then(res => setData(res.data));
    }, []);

    return(
        <div className="recipeList">
            { data.map(recipe => <RecipeEntry key={recipe.id} id={recipe.id} 
            name={recipe.name} flag={recipe.flag} image={recipe.image}/>) }
        </div>
    );
}

export default RecipeList;