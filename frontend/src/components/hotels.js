// This is the "view all products" Products Component for the Shop Page - "ProductsComp" (blueprint code to dynamically serve product data)

import React from "react";
import "../App.css";
import "../styles/hotels.css";
import { Link } from "react-router-dom";

const HotelsComp = ({ hotels, datefrom, dateto, selectHotel }) => {
    return (
      <div>
  
          {hotels.map((hotel) => (
            <li key={hotel.name}>

              <div className="card">
                  
                <img
                  className="hotel-image"
                  src={hotel.imageurl[0]}
                  alt="Hotel"
                />

                <div className="right3">

                  <Link to={"/hotel/" + hotel._id +"/"+datefrom.toString()+"/"+dateto.toString()}  target="_blank">
                    <div className="hotel-name">
                      {hotel.name}
                    </div>
                  </Link>

                  <div className="hotel-location">
                    {hotel.location}
                  </div>

                  <div className="hotel-price">${hotel.price}<br/>
                  <Link to={"/hotel/" + hotel._id +"/"+datefrom.toString()+"/"+dateto.toString()}  target="_blank"><button className="hotel-button" > See Details </button></Link> &nbsp;
                    <button className="hotel-button" onClick={() => selectHotel(hotel.price, hotel._id, hotel.name, hotel.location, hotel.imageurl[0])}>Select</button>                
                  </div>

                </div>

              </div>
            </li>
          ))}
      </div>
    );
  };

export default HotelsComp;