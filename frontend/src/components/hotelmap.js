// Map references:
// https://github.com/leighhalliday/mapbox-react-demo/blob/master/src/App.js

import React, {useState} from "react";
import "../App.css";
import "../styles/textoverimage.css";
//import {Link} from 'react-router-dom'
//import NavbarComp from "./navbar";
//import Image from 'react-bootstrap/Image'
// import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import * as hotelloc from "./hotel-map-geo.json";
// please do not uncomment below code

// class testmap extends Component {
//  render() {
//  return (
//  <div className="testmap">
//  Hello World
//  <Map google={this.props.google} />
//  </div>
//  );
//  }
// }
// export default GoogleApiWrapper({
//  apiKey: ('')
// })(testmap);

export default function Map() {
  const [viewport, setViewport] = useState({
    // change above with .data for coordinates data
    latitude: 41.8719,
    longitude: 12.5674,
    width: "30vw",
    height: "115vh",
    zoom: 10
  });
  const [selectedHotel, setSelectedHotel] = useState(null);
  

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoicnJycnJyMSIsImEiOiJja2hya2s4cmsxNDdtMzBwNThsa2FldnBvIn0.OWpM5HX82w1biViHW8c8Gw"}
        mapStyle="mapbox://styles/rrrrrr1/ckhrpb4yp0ovw19s0aevum55n"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {hotelloc.features.map((hotel)=> (
        <Marker key={hotel.properties.NAME}
        latitude={hotel.geometry.coordinates[0]}
        longitude={hotel.geometry.coordinates[1]}
        >
          <button 
            class='text-over-image'
            onClick= {e => {
              e.preventDefault();
              setSelectedHotel(hotel);
              }}
          >
            <img src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1606205953/trvl_marker_jf856y.png" alt="Hotel icon" />
          </button>
        </Marker>
        )
        )}

        {/* if hotel is selected display name on marker */}
        {selectedHotel ? (
          <Popup
            latitude={selectedHotel.geometry.coordinates[0]}
            longitude={selectedHotel.geometry.coordinates[1]}
            onClose={() => {setSelectedHotel(null); }}
            >
            <div>
              <h3>Hotel Name:</h3>
              <h2>{selectedHotel.properties.NAME}</h2>
            </div>
          </Popup>
        ) : null }

      </ReactMapGL>
    </div>
  );
}