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
            src="https://res.cloudinary.com/ashokacs/image/upload/v1605586021/banner1_alx8dx.png"
            alt="First slide"
            style={{ height: "10%"}}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ashokacs/image/upload/v1605586021/banner2_gphaeu.png"
            alt="Second slide"
            style={{ height: "20%" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/ashokacs/image/upload/v1605586021/banner3_fxd97k.png"
            alt="Third slide"
            style={{ height: "20%" }}
          />
        </Carousel.Item>
      </Carousel>

    );
  }
}
