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
                <div className="flight-name">
                  Carriers: {flight.itineraries[0].segments.map((segment) => (
                      <li key={segment.id}><b>{segment.carrierCode}</b> {segment.number}</li>
                  ))
                  }<br/>
                  Seats Left to book: {flight.numberOfBookableSeats}
                </div>

                <div className="flight-deets">
                    <li><b>{flight.itineraries[0].segments[0].departure.iataCode}</b> {flight.itineraries[0].segments[0].departure.at.toString()}</li>
                {flight.itineraries[0].segments.map((segment) => (
                      <li key={segment.id}><b>{segment.arrival.iataCode}</b> {segment.arrival.at.toString()}</li>
                  ))
                  }
                </div>

                <div className="flight-price">
                    {flight.price.total} {flight.price.currency}<br/>
                    <button className="flight-button" onClick={() => selectFlight(flight.price.total)}>Select</button>
                    </div>

                </div>

              </div>
            </li>
          ))}
      </div>
    );
  };

export default FlightsComp;