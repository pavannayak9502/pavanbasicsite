import React from "react";
import "../Header/Header.css";

let Header=()=>{

    return(
        <div className="header">
            <header>
            <h1>Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        </div>
    );

};

export default Header;
