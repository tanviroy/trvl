import React from "react";
import "../App.css";
import "../styles/flights.css";

const FlightsComp = ({flights, selectFlight}) => {
    return (
      <div>
  
          {flights.map((flight) => (
            <li key={flight.id}>

              <div className="card">               
                <div className="flight-container">
                
                <div>
                  <img
                    className="flight-logo"
                    src={`https://content.airhex.com/content/logos/airlines_` + flight.itineraries[0].segments[0].carrierCode + `_200_50_r.png?md5apikey=VDjfGgv8mxiTvvLLwGicD6V2eq`}
                    alt="Airline logo"
                  />
                </div>

                <div className="flight-name">
                  Carriers: {flight.itineraries[0].segments.map((segment) => (
                      <li key={segment.id}><b>{segment.carrierCode}</b> {segment.number}</li>
                  ))
                  }<br/>
                  Seats left to book: {flight.numberOfBookableSeats}
                </div>

                <div className="flight-deets-box">
                    <li className="flight-deets"><b>{flight.itineraries[0].segments[0].departure.iataCode}</b> {flight.itineraries[0].segments[0].departure.at.toString()}</li>
                {flight.itineraries[0].segments.map((segment) => (
                      <li className="flight-deets" key={segment.id}><b>{segment.arrival.iataCode}</b> {segment.arrival.at.toString()}</li>
                  ))
                  }
                </div>

                <div className="flight-price">
                    $ {flight.price.total}<br/><br />
                    <button className="flight-button" onClick={() => selectFlight(flight.price.total, flight.itineraries[0].segments[0].departure.at.toString(), flight.itineraries[0].segments[0].arrival.at.toString(), flight.itineraries[0].segments[0].carrierCode, flight.itineraries[0].segments[0].number)}>Select</button>
                </div>

                </div>

              </div>
            </li>
          ))}
      </div>
    );
  };

export default FlightsComp;