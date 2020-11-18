// Individual Hotel Page

import React, { Component } from "react";
import "../App.css";
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

        <div className="header">
          <NavbarComp />
        </div>
      <div className="product-container">

        <div className="item-b">
          <Container id="content">
          {this.state.hotels.map((hotel) =>(
            <li key={hotel.name}>
              <div>{hotel.name}</div><br />
              <div>{hotel.location}</div><br />
              <div><p>${hotel.price}</p></div><br />
              <div><p style={{fontWeight: "600"}}>Product Description:</p>
                {hotel.desc}</div><br />
            </li> 
          ))}
          </Container>

          </div>
        </div>

    </div>
    );
  }
}
 
export default Hotel;