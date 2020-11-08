// This is the main file containing the core of the application.
// It holds major routes and renders pages as components.

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';

import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Hotel from "./Pages/Hotel";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>

        <Route path="/" exact component={Home} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/explore/" component={Hotel} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />

    </BrowserRouter>

  );
}

export default App;