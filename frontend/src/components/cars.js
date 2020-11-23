// This is the "view all products" Products Component for the Shop Page - "ProductsComp" (blueprint code to dynamically serve product data)

import React from "react";
import "../App.css";
import "../styles/explore.css";
import { Link } from "react-router-dom";

const CarsComp = ({ car }) => {
    return (
      <div>
          {car.map((car) => (
            <li key={hotel.name}>
              <div className="card">               
                <div className="right3">
                  <Link to={"/car/" + car._id}>
                    <div className="car-name">
                      {car.name}
                    </div>
                  </Link>
                  <div className="car-price">${car.price}</div>
                </div>
              </div>
            </li>
          ))}
      </div>
    );
  };

export default CarsComp;