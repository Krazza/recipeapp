import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./RecipeSingle.css";

function RecipeSingle()
{
  const [recipeEntry, setRecipieDetails] = useState({});
  const params = useParams();
  
  useEffect(() => 
  {
        axios.get(`http://localhost:3001/savedrecipies/${params.recipesingle}`).then(res => setRecipieDetails(res.data));
    }, [params]);

    return (
      <div className="gridWrap">
      <div className="cardGrid">
      <h2>{recipeEntry.name}</h2>
        <img id="flagSingle" src={recipeEntry.flag} alt="flags are cool"/>
        <img id="pic" src={recipeEntry.image} alt={recipeEntry.name} />
        <div id="ingr">
          <h3>Ingredient : Quantity</h3>
          <ul>
            {recipeEntry.ingredients?.map(item => <li key={item.ingredient}>{item.ingredient} : {item.quantity}</li>)}
          </ul>
        </div>
          <p id="description">{recipeEntry.description}</p>
          <div id="directions">
            <h3>Instructions</h3>
            <p>{recipeEntry.directions}</p>
          </div>
      </div>
      </div>
      );
}

export default RecipeSingle;