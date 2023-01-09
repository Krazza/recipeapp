import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/NewRecipe.css";

function NewRecipe()
{
    /* general functionality */
    const [entry, setEntryData] = useState(
    {
        id: "",
        name: "",
        author: "",
        country: "",
        flag: "",
        description: "",
        image: "",
        ingredients: {},
        directions: "",
    });

    const inputHandler = (e) => 
    {
        setEntryData({ ...entry, [e.target.name]: e.target.value });
    };

    /* ingredients */
    const [ingredients, setIngredients] = useState([{ ingredient: "", quantity: "" }]);
    const ingredientsInputHandler = (e, index) => {
        let data = [...ingredients];
        data[index][e.target.name] = e.target.value;
        setIngredients(data);
        setEntryData({ ...entry, ingredients: ingredients });
    };

    const newIngredientsField = (e) => {
        e.preventDefault();
        let newField = {
          ingredient: "",
          quantity: "",
        };
        setIngredients([...ingredients, newField]);
    };

    /* countries */
    const countries = [];
    const [countriesData, setCountriesData] = useState([]);
    useEffect(() => 
    {
        axios.get("https://restcountries.com/v3.1/all").then(res => setCountriesData(res.data));
    }, []);
    countries.push(countriesData.map(country => country.name.common));

    const countryPickHandler = (e) => 
    {
        axios.get(`https://restcountries.com/v3.1/name/${e.target.value}`).then(res => 
        setEntryData({...entry, flag: res.data[0].flags?.svg, country: res.data[0].name.common}));
    };

    /* JSON POST */
    const postToJSONServer = (e) =>
    {
        e.preventDefault()
        axios.post("http://localhost:3001/savedrecipies", 
        {
            name: entry.name,
            author: entry.author,
            country: entry.country,
            flag: entry.flag,
            description: entry.description,
            image: entry.image,
            ingredients: entry.ingredients,
            directions: entry.directions,
        });

        window.location.reload();
    }

    return (
    <div className="formContainer">
        <h2>Add a new recipe</h2>
        <form>
            <label for="name">
                Name:<input type="text" name="name" id="name" onChange={inputHandler} required/>
            </label>
            <label for="author">
                Author:<input type="text" name="author" id="author" onChange={inputHandler} required/>
            </label>
            <label for="country">
                Recipe is from:
                <select name="country" id="country" onChange={countryPickHandler} required>
                    {countries[0].map(country => <option value={country} key={country}> {country} </option>)}
                </select>
            </label>
            <label for="description">
                Description:<textarea name="description" id="descriptionArea" onChange={inputHandler} required></textarea>
            </label>
            <label for="image">
                Image:<input type="url" name="image" id="image" onChange={inputHandler} required/>
            </label>
            <label id="ingredientLabel">
                <span>Ingredients:</span>
            {ingredients.map((ingredient, index) => 
                <div key={index} id="ingredientBox">
                    <div>
                        <label>
                            Ingredient:
                            <input type="text" name="ingredient" id="ingredient" onChange={(e) => ingredientsInputHandler(e, index)} required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Quantity:
                            <input type="text" name="quantity" id="quantity" onChange={(e) => inputHandler(e, index)} required/>
                    </label>
                    </div>
                </div>)}
            <button className="myBttnClass" onClick={newIngredientsField}>ADD INGREDIENT</button>
            </label>
            <label for="directionsLabel">
                Directions:
                <textarea name="directionsLabel" id="directionsLabel" onChange={inputHandler} required></textarea>
            </label>
            <button className="postBttn" type="submit" id="submit" onSubmit={postToJSONServer}>
            POST RECIPE</button>
        </form>
    </div>
    );
}

export default NewRecipe;