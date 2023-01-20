import React from 'react';
import { NavLink } from "react-router-dom";
import "../components/Nav.css";

function Nav()
{
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="recipelist">Recipe list</NavLink></li>
                <li><NavLink to="addrecipe">Add new</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;