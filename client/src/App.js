import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Variante from "./pages/Variante";
import './global.module.css'
import PostsPage from "./pages/PostsPage";

function App() {

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/dashboard/:id" component={Variante} />
                    <Route path="/posts" component={PostsPage} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;