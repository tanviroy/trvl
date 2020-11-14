// Explore/Search Page

import React, { Component } from "react";
import "../App.css";
import "../styles/explore.css";
import NavbarComp from "../components/navbar";

class Explore extends Component {
  
  render() {
    return (
      <div>

        <div className="header">
          <NavbarComp />
        </div>

        <div className="container2">
          <div className="left2">
            Filters and sorts go here 
          </div>
          <div className="right2">
            Hotel results go here
          </div>
        </div>

      </div>
    );
  }
}

export default Explore;