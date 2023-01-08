import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeSingle()
{
    const [recipeEntry, setRecipieDetails] = useState({});
    const params = useParams();

    useEffect(() => 
    {
        console.log("skjdfnskdjfn")
        axios.get(`http://localhost:3001/savedrecipies/${params.recipesingle}`).then(res => setRecipieDetails(res.data));
    }, []);
    
    return (
        <div className="details-wrapper">
          <div className="details-name">
            <h2>{recipeEntry.name}</h2>
          </div>
          <div className="details-info">
            <div className="details-image">
              <img src={recipeEntry.image} alt={recipeEntry.name} />
            </div>
          </div>
        </div>
      );
}

export default RecipeSingle;