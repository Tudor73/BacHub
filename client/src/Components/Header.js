import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { UserContext } from "../UserContext";
import { compose } from "@material-ui/system";

function Header() {
    const {user, setUser} = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const style = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.15rem',
        letterSpacing: '1px'
    }
    const logoutUser = () => {
        localStorage.removeItem('jwtToken');
        setUser(null);
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
                        {user != null ? (<li className= {styles.loginButton} onClick={logoutUser}>Logout</li>) : (
                            <div>
                            <li className={styles.loginButton} onClick={() => { setIsOpen(true) }}> Login</li>
                            <LoginForm isOpen={isOpen} onClose={() => { setIsOpen(false) }} />
                            </div> 
                        )}

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;