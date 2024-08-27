import React from "react";
import "../../Examples/Header/Header.css";

let Header=()=>{

    return(
        <div className="header">
        <header>
            <h1><a href="http://localhost:3000" id="Formain">PortFolio</a></h1>

            <nav>
                <ul>
                    
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#about">About</a></li>

                </ul>
            </nav>
        </header>

        </div>

    );
}
export default Header;