import React from "react";
import "./Header.css";
import "./global.css";
import { Link, withRouter } from "react-router-dom";

function Header() {

    const style = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.15rem',
        letterSpacing: '1px'
    }
    return (
        <header>
            <div className="header-container">
                <h1>Proiect Bac</h1>
                <nav>
                    <ul className="nav-links">
                        <Link style={style} to="/">
                            <li>Home</li>
                        </Link>
                        <Link style={style} to="/dashboard">
                            <li>Dashboard</li>
                        </Link>
                        <Link style={style} to="/posts">
                            <li>Chat</li>
                        </Link>
                        <li className="login-button"> Login</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;