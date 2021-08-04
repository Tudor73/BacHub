import React from "react";
import "./Header.css";
import "./global.css";

function Header() {
    return (
    <header>
    <div className= "header-container">
        <h1>Proiect Bac</h1>
        <nav>
            <ul className="nav-links">
                <li>Home</li>
                <li>Dashboard</li>
                <li>Chat</li>
                <li className="login-button"> Login</li>
            </ul>
        </nav>
    </div>
    </header>
    )
}

export default Header;