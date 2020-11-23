// This is the main file containing the core of the application.
// It holds major routes and renders pages as components.

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';

import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Flight from "./Pages/Flight";
import Hotel from "./Pages/Hotel";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import AddHotel from "./Pages/addhotel";
import FooterComp from "./components/footer";
import AboutUs from "./Pages/AboutUs";
import TermsandConditions from "./Pages/T&C";

function App() {
  return (
    <BrowserRouter>

        <Route path="/" exact component={Home} />
        <Route path="/explore-trvl" exact component={Explore} />
        <Route path="/flight" exact component={Flight} />
        <Route path="/hotel/" component={Hotel} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/addhotel" exact component={AddHotel} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/terms-and-conditions" exact component={TermsandConditions} />

        <FooterComp />
    </BrowserRouter>

  );
}

export default App;