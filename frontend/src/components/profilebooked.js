import React from "react";
import "../App.css";
import "../styles/hotels.css";

//import { Link } from "react-router-dom";

const ProfileBookedComp = ({ hotels }) => {
    return (
      <div>
  
          {hotels.map((hotel) => (
            <li key={hotel.hotelname}>
            <div className="card">
                
                {hotel.hotelname === ''
                ? null
                :
                <div className="card">
                <img
                  className="hotel-image"
                  src={hotel.hotelimageurl}
                  alt="Hotel"
                />
                <div className="right3">
                    <div className="hotel-name">
                      <b>{hotel.hotelname}</b>
                    </div>
                  <div className="hotel-location">
                    {hotel.hotellocation}
                  </div>
                  <div className="hotel-price">${hotel.hotelcost}<br/> </div>
                </div>
              </div>
                
                }
              

              {hotel.flightcarriercode === ''
              ? null
              :
              <div className="card">              
                  <img
                    className="hotel-image"
                    src={`https://content.airhex.com/content/logos/airlines_`+ hotel.flightcarriercode +`_200_50_r.png?md5apikey=VDjfGgv8mxiTvvLLwGicD6V2eq`}
                    height="90%"
                    alt="Airline logo"
                  />
            <div className="right3">
                <div className="hotel-name">
                  <b>{hotel.flightcarriercode}</b> {hotel.flightnumber}
                </div>
                <div className="hotel-name">
          <b>{hotel.source}</b> - <b>{hotel.destination}</b>
                </div>
                <div className="hotel-price"> Price: ${hotel.flightcost} <br/></div>
            </div>   
            </div>
              }

              {hotel.cartype === ''
              ? null
              : 
              <div className="card">
              <img
                      className="hotel-image"
                      src={hotel.carimageurl}
                      alt="hotel"
                    />              
                <div className="right3">
                <div className="hotel-name">
                  <b>{hotel.cartype}</b>
                </div>
                <div className="hotel-price"> Starting at ${hotel.carcost} per day <br/></div>
                </div>
              </div>
              }

              
            <center>
            <b>Total Cost:</b> $ {hotel.carcost + hotel.flightcost + hotel.hotelcost} <br/><br/>
            </center>
              

              </div>
            </li>
          ))}
      </div>
    );
  };

export default ProfileBookedComp;