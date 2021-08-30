import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
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
                        <li className={styles.loginButton} onClick={() => { setIsOpen(true) }}> Login</li>
                        <LoginForm isOpen={isOpen} onClose={() => { setIsOpen(false) }} />
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;