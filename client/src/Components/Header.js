import React from "react";
import styles from "./Header.module.css";
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
            <div className={styles.headerContainer}>
                <h1>Proiect Bac</h1>
                <nav>
                    <ul className={styles.navLinks}>
                        <Link style={style} to="/">
                            <li>Home</li>
                        </Link>
                        <Link style={style} to="/dashboard">
                            <li>Dashboard</li>
                        </Link>
                        <Link style={style} to="/posts">
                            <li>Chat</li>
                        </Link>
                        <li className={styles.loginButton}> Login</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;