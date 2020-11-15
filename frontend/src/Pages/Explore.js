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

        <div className="search">
        <form action="#">
          <div className="search1" data-panel-bounds="true">
            <div className="destination">
              <div className="search-input">
                <input type = "text" name = "Destination" placeholder = "Where to?"/>
              </div>
            </div>
          <div className="separator"></div>

          <div className="dates">
            <div className="checkin">
              <div className="search-input">
                <input type = "date" name = "From" placeholder = "From"/>
              </div>
            </div>
            <div className="separator"></div>
            <div className="checkout">
              <div className="search-input">
                <input type = "date" name = "To" placeholder = "To"/>
              </div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="guests">
            <div className="search-input">
              <div className="guest-num">
                <select name="guests" id="guests">
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                </select>
              </div>
            </div>
          </div>

          <div className="button-container">
                <button type="submit" className="search-button">Get</button>
          </div>
          
          </div>
        </form>
       
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