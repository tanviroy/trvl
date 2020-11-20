// This is the "view all products" Products Component for the Shop Page - "ProductsComp" (blueprint code to dynamically serve product data)

import React from "react";
import "../App.css";
import "../styles/HotelCard.css";
import { Link } from "react-router-dom";

const HotelCardComp = ({ hotels }) => {
    return (
      <div className="hotelcard-container">
          {hotels.map((hotel) => (
            <li key={hotel._id}>
              <div className="hotelcard">

                  <img
                      className="hotelcard-image"
                      src={hotel.imageurl}
                      alt="hotel"
                    />
                <div className="right3">
                    <Link to={"/hotel/" + hotel._id}><div className="hotelcard-name">
                    {hotel.name}
                    </div></Link>
                    <div className="hotelcard-location">
                    {hotel.location}
                    </div>
                    <div className="hotelcard-price">${hotel.price}</div>
                </div>
               

                    
                
              </div>
            </li>
          ))}
      </div>
    );
  };

export default HotelCardComp;