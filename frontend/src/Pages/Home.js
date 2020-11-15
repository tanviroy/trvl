// Home Page

import React, { Component } from "react";
import "../App.css";
import "../styles/Home.css";
import "../styles/Switch.css"
import {Link} from 'react-router-dom'
import NavbarComp from "../components/navbar";
import CarouselComp from "../components/carousel";


class Home extends Component {
  
  render() {
    return (
    <div>

    <section>
      <div className="banner">
        <Link to="/explore-trvl">
        <button className="start-exploring">Start Exploring</button>
        </Link>
        <NavbarComp />
        <CarouselComp />
      </div>
    </section>

    <section style={{height: "250px", paddingTop: "5%"}}>
      <h1>This switch is for fun.</h1>
      <div class="mid">
        <label class="rocker">
          <input type="checkbox"></input>
          <span class="switch-left">:)</span>
          <span class="switch-right">:(</span>
        </label>
      </div>
    </section>

    <section style={{background: "rgba(220, 220, 220, 1)", height: "400px", paddingTop: "5%"}}>
        <div className="container">
            <div className="left">
              Lorem ipsum 
            </div>
            <div className="right">
              Map goes here
            </div>
        </div>

    </section>

  </div>
    );
  }
}

export default Home;