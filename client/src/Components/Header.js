import React, { useContext, useState } from "react";
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
      <div className="bg-indigo-500 text-indigo-50 p-4 flex flex-row  w-screen justify-between items-center">
        <div className="flex">
          <h1 className="text-3xl tracking-wide m-2 ">BacHub</h1>{" "}
          <nav className="">
            <ul className="flex space-x-24 h-full items-center p-4 ">
              <Link to="/">
                <li>Profile</li>
              </Link>
              <Link to="/dashboard">
                <li>Dashboard</li>
              </Link>
              <Link to="/posts">
                <li>Chat</li>
              </Link>
            </ul>
          </nav>
        </div>
        {user != null ? (
          <li onClick={logoutUser}>Logout</li>
        ) : (
          <div className="">
            <li
              className="inline-block py-2 px-4 text-yellow-700 bg-yellow-400 hover:bg-yellow-300 hover:text-yellow-800 rounded transition ease-in duration-150"
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
      </div>
    </header>
  );
}

export default Header;
