import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeEntry from "./RecipeEntry.js";
import "./RecipeList.css";

function RecipeList()
{
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => 
    { 
        axios.get("http://localhost:3001/savedrecipies").then(res => setData(res.data));
    }, []);

    const recipeFilter = data.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLocaleLowerCase()));
    const filteredRecipeData = recipeFilter.map(recipe => <RecipeEntry key={recipe.id} id={recipe.id} 
    name={recipe.name} flag={recipe.flag} image={recipe.image}/>);

    return(
        <div className="anotherOne">
            <input type="text" placeholder="Search" onChange={Search}/>
            <div className="recipeList">
                {filteredRecipeData}
            </div>
        </div>
    );

    function Search(event)
    {
        setSearch(event.target.value);
    }
}

export default RecipeList;