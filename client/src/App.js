import React, { useState, useMemo } from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Variante from "./pages/Variante";
import CreatePostForm from "./pages/CreatePostForm";
import "./global.module.css";
import PostsPage from "./pages/PostsPage";
import PostDetails from "./pages/PostDetails";
import { UserContext } from "./UserContext";
import Profile from "./pages/Profile";

function App() {
  const token = localStorage.getItem("jwtToken");
  const user_name = localStorage.getItem("name");
  const [user, setUser] = useState({ token: token, name: user_name });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div>
        <UserContext.Provider value={value}>
          <Header />
          <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/:id" component={Variante} />
            <Route path="/posts" exact component={PostsPage} />
            <Route path="/posts/:id" exact component={PostDetails} />
            <Route path="/create-post" component={CreatePostForm} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
