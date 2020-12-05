// Map references:
// https://github.com/leighhalliday/mapbox-react-demo/blob/master/src/App.js

import React, {useState} from "react";
import "../App.css";
import "../styles/textoverimage.css";
import ReactMapGL, {Marker} from "react-map-gl";
//import * as hotelloc from "./hotel-map-geo.json";
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

export default function Map2(params) {
  const [viewport, setViewport] = useState({
    // change above with .data for coordinates data
    latitude: parseFloat(params.hotel[0].coords[0]),
    longitude: parseFloat(params.hotel[0].coords[1]),
    width: "35vw",
    height: "90vh",
    zoom: 10
  });

  console.log(parseFloat(params.hotel[0].coords[0]))
  console.log(params.lat)

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
  
        <Marker key="HOTEL MARTINO AI MONTI SINGLE ROOM"
        latitude={parseFloat(params.hotel[0].coords[0])}
        longitude={parseFloat(params.hotel[0].coords[1])}
        >
          <button 
            class='text-over-image'
           
          >
            <img src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1606205953/trvl_marker_jf856y.png" alt="Hotel icon" />
          </button>
        </Marker>
        )

      </ReactMapGL>
    </div>
  );
}