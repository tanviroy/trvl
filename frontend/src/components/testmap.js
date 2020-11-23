// Map references:
// https://github.com/leighhalliday/mapbox-react-demo/blob/master/src/App.js

import React, { Component } from "react";
import "../App.css";
import "../styles/textoverimage.css";
import {Link} from 'react-router-dom'
import NavbarComp from "./navbar";
import Image from 'react-bootstrap/Image'
// import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

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
    width: "40vw",
    height: "115vh",
    zoom: 10
  });

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
      </ReactMapGL>
    </div>
  );
}