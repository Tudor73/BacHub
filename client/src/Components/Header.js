import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { UserContext } from "../UserContext";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const logoutUser = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("name");
    localStorage.removeItem("display_name");
    setIsLoggedIn(false);
    setUser(null);
    window.location.reload();
  };
  const onPopUpClose = () => {
    setIsOpen(false);
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setUser(token);
      setIsLoggedIn(true);
    }
  };
  return (
    <header>
      <div className="bg-blue-500 text-indigo-50 p-4 flex flex-row w-screen justify-between items-center">
        <div className="flex justify-around">
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
          <div className="self-center relative ml-60">
            <SearchIcon className="absolute top-1 left-1" />
            <input
              type="text"
              placeholder="Search"
              className="px-7 py-1 h-1/2 bg-blue-600 text-white rounded-md"
            ></input>
          </div>
        </div>
        {isLoggedIn === true ? (
          <a
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer mr-8"
            onClick={logoutUser}
          >
            Logout
          </a>
        ) : (
          <div className="">
            <li
              className="inline-block py-2 px-4 mr-8 text-yellow-700 bg-yellow-400 hover:bg-yellow-300 hover:text-yellow-800 rounded transition ease-in duration-150 cursor-pointer"
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
