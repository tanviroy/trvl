// Individual Hotel Page

import React, { Component } from "react";
import "../App.css";
import "../styles/hotel.css";
import { Container } from "react-bootstrap";
import NavbarComp from "../components/navbar";


class Hotel extends Component {

  state = {
    hotels: [],
  };

  componentDidMount() {
    let url = window.location.pathname
    let hotel_id = url.split("/")[2]
    console.log(hotel_id)
    fetch("http://localhost:5000/gethotelbyid/" + hotel_id)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ hotels: data });
        console.log(data);
      })
      .catch(console.log);
  }

  render() {
    return (

    <div style={{paddingBottom: "5%"}}>

    {this.state.hotels.map((hotel) =>(
      <li key={hotel.name}>
        
        <div className="hotel-banner">
          <NavbarComp />
          <img
            className="ihotel-img"
            src={hotel.imageurl}
            alt="hotel"
          />
        </div>

        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
            <circle cx="55" cy="55" r="55" fill="white" />
            <text x="32" y="64" fill="black" fontSize="xx-large" position="absolute">{hotel.rating}</text>
        </svg>


        <div className="container4">

         <div className="left4">
          <div style={{fontSize: "3rem", color: "#003060"}}>{hotel.name}</div><br />
          <div style={{color: "grey", marginTop: "-1%", position: "relative"}}>{hotel.location}</div><br />
          <div><p>${hotel.price}</p></div><br />
          <div><p style={{fontWeight: "600"}}>Hotel Description:</p>
          {hotel.desc}</div><br />
          <div><p style={{fontWeight: "600"}}>Hotel Amenities:</p>
            <ul>{hotel.amenities.map(name => <li style={{listStyleType: "disc"}} key={name}> {name} </li>)}</ul>
          </div><br />

          <br />

          <button>Book Now</button> &nbsp; &nbsp; &nbsp;
          <button>Add to Bucket List</button>
          
         </div>

         <div className="right4">
         ⚠️ Map goes here!
         </div>

        </div>
      
      </li> 
        
        ))}
          
    </div>
    );
  }
}
 
export default Hotel;