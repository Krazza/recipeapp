import React from 'react';
import VideoBanner from "./VideoBanner";
import "../components/Home.css";
import HomeCard from "./HomeCard.js";

function Home()
{
    return(
        <div className="homeContainer">
            <VideoBanner/>
            <div className="cardContainer">
                <h2>Where is the good stuff?</h2>
                <div className="homeCardContainer">
                    <HomeCard title="Browse recipies" text="Find your favourite recipes in this collection.You can search recipies based on name or country." linkText="All recipies" link="recipelist"/>
                    <HomeCard title="Add recipies" text="Recipies from your country is missing? Add one!" linkText="Add recipies" link="addrecipe"/>
                    <HomeCard external={true} title="Want to know more about our projects?" text="Visit our programme home page" linkText="Business College Helsinki"/>
                </div>
            </div>
        </div>
    );
}

export default Home;