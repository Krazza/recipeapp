import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

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
            <label>
                {" "}
                Name:
                <input required type="text" name="name" id="name" onChange={inputHandler}/>
            </label>
            <label>
                {" "}
                Author:
                <input required type="text" name="author" id="author" onChange={inputHandler}/>
        </label>
        <label className="form-input-title">
            {" "}
            Recipe is from:
            <select required name="country" id="country" onChange={countryPickHandler}>
                {countries[0].map(country => <option value={country} key={country}> {country} </option>)}
            </select>
        </label>
        <label>
            Description:
            <textarea required name="description" id="description" onChange={inputHandler}></textarea>
        </label>
        <label>
            Image:
            <input required type="url" name="image" id="image" onChange={inputHandler}/>
        </label>
        <label>
            Ingredients:
            {ingredients.map((ingredient, index) => 
                <div className="ingredients-field" key={index}>
                    <div className="one-input">
                        <label className="form-input-title">
                            Ingredient:
                            <input type="text" name="ingredient" id="ingredient" onChange={(e) => ingredientsInputHandler(e, index)}/>
                        </label>
                    </div>
                    <div className="one-input">
                        <label className="form-input-title">
                            Quantity:
                            <input type="text" name="quantity" id="quantity" onChange={(e) => inputHandler(e, index)}/>
                    </label>
                    </div>
                </div>)}
            <button className="addIngredients-btn" onClick={newIngredientsField}>Add</button>
        </label>
        <label>
            Directions:
            <textarea required name="directions" id="directions" onChange={inputHandler}></textarea>
        </label>
        <button className="post-btn" type="submit" id="submit" onClick={postToJSONServer}>
            Post recipe 
        </button>
        </form>
    </div>
    );
}

export default NewRecipe;