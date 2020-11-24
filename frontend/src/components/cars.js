// This is the "view all products" Products Component for the Shop Page - "ProductsComp" (blueprint code to dynamically serve product data)

import React from "react";
import "../App.css";
import "../styles/explore.css";

const CarsComp = ({ selectCar }) => {
    return (
      <div>


              <div className="card">

                    <img
                      className="hotel-image"
                      src="https://assets.newatlas.com/dims4/default/bcf6274/2147483647/strip/true/crop/1620x1080+150+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Foriginal-bond-goldfinger-aston-martin-db5-auction-8.jpg"
                      alt="hotel"
                    />
               
                <div className="right3">
                <div className="hotel-name">
                  <b>Vintage Luxury</b>
                </div>

                <div className="hotel-price"> Starting at $877 per day <br/>
                <button className="hotel-button" onClick={() => selectCar(877)}>Select</button></div>

                </div>

              </div>

              <div className="card">

                    <img
                      className="hotel-image"
                      src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg?itok=QTxMln2k"
                      alt="hotel"
                    />
               
                <div className="right3">
                <div className="hotel-name">
                  <b>Executive</b>
                </div>

                <div className="hotel-price">$239 per day <br/>
                <button className="hotel-button" onClick={() => selectCar(239)}>Select</button></div>

                </div>

              </div>

              <div className="card">

                    <img
                      className="hotel-image"
                      src="https://media.familyminded.com/ee/88/ee88b74994d2469c945f0128bcef0caa.jpeg"
                      alt="hotel"
                    />
               
                <div className="right3">
                <div className="hotel-name">
                  <b>Family</b>
                </div>

                <div className="hotel-price">$50 per day <br/>
                <button className="hotel-button" onClick={() => selectCar(50)}>Select</button></div>

                </div>

              </div>

              <div className="card">

                    <img
                      className="hotel-image"
                      src="https://cdn.carbuzz.com/gallery-images/840x560/711000/0/711084.jpg"
                      alt="hotel"
                    />
               
                <div className="right3">
                <div className="hotel-name">
                  <b>Off-Road 4WD</b>
                </div>

                <div className="hotel-price">Starting at $100 per day <br/>
                <button className="hotel-button" onClick={() => selectCar(100)}>Select</button></div>

                </div>

              </div>

      </div>
    );
  };

export default CarsComp;