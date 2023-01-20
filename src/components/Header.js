import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Header.css";
import Nav from "./Nav.js";

function Header()
{
    return (
        <header>
            <Link to="/"><h2>Cooking internationally</h2></Link>
            <Nav/>
        </header>
    );
}

export default Header;

