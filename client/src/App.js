import React, { useState, useMemo } from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Variante from "./pages/Variante";
import CreatePostForm from "./pages/CreatePostForm";
import PostsPage from "./pages/PostsPage";
import PostDetails from "./pages/PostDetails";
import { UserContext } from "./UserContext";
import Profile from "./pages/Profile";

function App() {
  const token = localStorage.getItem("jwtToken");
  const user_name = localStorage.getItem("name");
  const loggedIn = token ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);
  const [user, setUser] = useState({ token: token, name: user_name });

  const userValue = useMemo(
    () => ({ user, setUser, isLoggedIn, setIsLoggedIn }),
    [user, setUser, isLoggedIn, setIsLoggedIn]
  );
  return (
    <Router>
      <div>
        <UserContext.Provider value={userValue}>
          <Header />
          <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/:id" component={Variante} />
            <Route path="/create-post" component={CreatePostForm} />
            <Route path="/posts" exact component={PostsPage} />
            <Route path="/posts/:id" exact component={PostDetails} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
