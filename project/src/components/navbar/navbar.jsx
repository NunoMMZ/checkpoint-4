import React from "react";
import "./navbar.css";

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar-txt">
                <a className="navbar-item" href="#about">About</a>
                <a className="navbar-item" href="#projects">Projects</a>
                <a className="navbar-item" href="#contact">Contact</a>
            </div>
        </div>
    );
}
