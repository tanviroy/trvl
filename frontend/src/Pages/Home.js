// Home Page

import React, { Component } from "react";
import "../App.css";
import "../styles/home.css";
import {Link} from 'react-router-dom'
import Axios from "axios";
import NavbarComp from "../components/navbar";
import CarouselComp from "../components/carousel";
import HotelCardComp from "../components/hotelcards";
import Worldmap from "../components/worldmap";
import Typewriter from 'typewriter-effect';


class Home extends Component {

  state = {
    hotels: [],
    featured: [],
    recco: [],
    userstatus: false,
  };

  componentDidMount(){
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/viewedhotels",
    }).then((res) => {
        this.setState({ hotels: res.data});
        console.log(res.data)
      });
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:5000/getfeaturedhotels",
      }).then((res) => {
          this.setState({ featured: res.data});
          console.log(res.data)
        });
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:5000/recco",
      }).then((res) => {
          this.setState({ recco: res.data});
          console.log(res.data)
        });
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:5000/userstatus",
        }).then((res) => {
            this.setState({ userstatus: res.data});
            console.log(res.data)
          });
  }
  
  render() {
    return (
    <div>

    <section>
      <div className="banner">
        <Link to="/explore" style={{padding: "0", margin: "0"}}>
          <button className="start-exploring">Start Exploring</button>
        </Link>
        <NavbarComp />
        <CarouselComp />
      </div>
    </section>

    <section style={{paddingTop: "7%", paddingBottom: "5%"}}>
      <div>
          <h1 style={{fontSize: "6rem"}}>Welcome to <b>trvl</b></h1>

          <h1 style={{fontSize: "3.5rem", width: "auto", display: "inline-block"}}>
          <Typewriter style={{display: "block"}}
            options={{
              strings: ['Travel Tokyo 🗼','Beach please 🏄‍♂️','Explore New York City 🗽','Namaste India 🛺','Experience scuba diving 🐠','Global cuisines 🍣'],
              autoStart: true,
              loop: true,
            }}
          />
          </h1>

          {this.state.userstatus
          ?
          <div>
          <h1>Based on your browsing history</h1><br/>
          <HotelCardComp hotels={this.state.recco.slice(0,5)} /> <br/>

          <h1>Featured Hotels</h1><br/>
          <HotelCardComp hotels={this.state.featured} />
          </div>
          :
          <div>
          <h1>Featured Hotels</h1><br/>
          <HotelCardComp hotels={this.state.featured} /> <br/>
          <h1>Login to view personalized recommendations</h1><br/>
          </div>
        }
          
          
      </div>
    </section>


    <section style={{zIndex: "-1", background: "#003060", height: "400px", paddingTop: "5%"}}>

        <div className="container">

            <div className="left">
              <h1 style={{fontSize: "5rem"}}><b>trvl.</b></h1>
              [ˈtrav(ə)l] (n.) <br />
              <span style={{fontSize: "2rem"}}>
              One platform for all your travel plans - flights ✈️, hotels 🏡, and cab rentals 🚕 - we got you covered! 
              </span>
            </div>

            <div className="right">
              <Worldmap />
            </div>
    
        </div>
    </section>
    
  </div>
    );
  }
}

export default Home;