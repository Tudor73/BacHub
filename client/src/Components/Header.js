import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { UserContext } from "../UserContext";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const style = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.15rem",
    letterSpacing: "1px",
  };
  const logoutUser = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("name");
    setUser(null);
  };
  const onPopUpClose = () => {
    setIsOpen(false);
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setUser(token);
    }
  };
  return (
    <header>
      <div className={styles.headerContainer}>
        <h1>BacHub</h1>
        <nav>
          <ul className={styles.navLinks}>
            <Link style={style} to="/">
              <li>Profile</li>
            </Link>
            <Link style={style} to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link style={style} to="/posts">
              <li>Chat</li>
            </Link>
            {user != null ? (
              <li className={styles.loginButton} onClick={logoutUser}>
                Logout
              </li>
            ) : (
              <div>
                <li
                  className={styles.loginButton}
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  {" "}
                  Login
                </li>
                <LoginForm isOpen={isOpen} onClose={onPopUpClose} />
              </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
