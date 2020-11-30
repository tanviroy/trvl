import React from "react";
import "../App.css";
import "../styles/hotels.css";
//import { Link } from "react-router-dom";

const ProfileHotelsComp = ({ hotels }) => {
    return (
      <div>
  
          {hotels.map((hotel) => (
            <li key={hotel.name}>

              <div className="card">
                  
                <img
                  className="hotel-image"
                  src={hotel.imageurl}
                  alt="Hotel"
                />

                <div className="right3">

                    <div className="hotel-name">
                      {hotel.name}
                    </div>


                  <div className="hotel-location">
                    {hotel.location}
                  </div>

                  <div className="hotel-price">${hotel.price}<br/> </div>

                </div>

              </div>
            </li>
          ))}
      </div>
    );
  };

export default ProfileHotelsComp;