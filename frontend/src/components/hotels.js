// This is the "view all products" Products Component for the Shop Page - "ProductsComp" (blueprint code to dynamically serve product data)

import React from "react";
import "../App.css";
import "../styles/explore.css";
import { Link } from "react-router-dom";

const HotelsComp = ({ hotels, datefrom, dateto, selectHotel }) => {
    return (
      <div>
  
          {hotels.map((hotel) => (
            <li key={hotel.name}>

              <div className="card">

     
                    <img
                      className="hotel-image"
                      src={hotel.imageurl}
                      alt="hotel"
                    />
     
            
               
                <div className="right3">
                <Link to={"/hotel/" + hotel._id +"/"+datefrom.toString()+"/"+dateto.toString()}><div className="hotel-name">
                  {hotel.name}
                </div></Link>

                <div className="hotel-location">
                  {hotel.location}
                </div>

                <div className="hotel-price">${hotel.price}
                <button className="flight-button" onClick={() => selectHotel(hotel.price, hotel._id)}>Select</button></div>

                </div>

              </div>
            </li>
          ))}
      </div>
    );
  };

export default HotelsComp;