import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./components/Home.js"
import RecipeList from "./components/RecipeList.js";
import NewRecipe from "./components/NewRecipe.js";
import "./App.css";
import RecipeSingle from "./components/RecipeSingle.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="recipelist" element={<RecipeList/>}/>
          <Route path="addrecipe" element={<NewRecipe/>}/>
          <Route path="recipelist/:recipesingle" element={<RecipeSingle/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
