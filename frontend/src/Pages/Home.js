// Home Page

import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom'
import Search from "../components/Search";
import Header from "../components/Header";
import Banner from "../components/Banner";

class Home extends Component {
  
    render() {
      return (
        <div>
        
            <h1>Home Page</h1>

            <Banner />
            <Header />
            <Search />
  
        </div>
      );
    }
  }

export default Home;