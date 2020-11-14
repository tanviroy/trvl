// This is the Carousel Component for the Home Page - "CarouselComp"

import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";

export default class CarouselComp extends Component {
  render() {
    return (

        <Carousel style={{ marginTop: "0", width: "100%", height: "40%" }} interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dfymeww45/image/upload/v1604912000/img1_f11fbf.png"
            alt="First slide"
            style={{ height: "10%" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dfymeww45/image/upload/v1604912000/img2_gul4zh.png"
            alt="Second slide"
            style={{ height: "20%" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dfymeww45/image/upload/v1604912000/img3_wclz2w.png"
            alt="Third slide"
            style={{ height: "20%" }}
          />
        </Carousel.Item>
      </Carousel>

    );
  }
}
