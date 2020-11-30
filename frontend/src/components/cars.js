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
                      src="https://www.hdwallpapers.in/download/black_volkswagen_golf_gtd_2020_4k_5k_hd_cars-HD.jpg"
                      alt="hotel"
                    />
               
                <div className="right3">
                <div className="hotel-name">
                  <b>Economy</b>
                </div>

                <div className="hotel-price"> Starting at $89 per day <br/>
                <button className="hotel-button" onClick={() => selectCar(89, 'Economy', 'https://www.hdwallpapers.in/download/black_volkswagen_golf_gtd_2020_4k_5k_hd_cars-HD.jpg')}>Select</button></div>

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
                <button className="hotel-button" onClick={() => selectCar(239, 'Executive', "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg?itok=QTxMln2k")}>Select</button></div>

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

                <div className="hotel-price">$150 per day <br/>
                <button className="hotel-button" onClick={() => selectCar(150, 'Family', "https://media.familyminded.com/ee/88/ee88b74994d2469c945f0128bcef0caa.jpeg")}>Select</button></div>

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

                <div className="hotel-price">Starting at $200 per day <br/>
                <button className="hotel-button" onClick={() => selectCar(200, 'Off-Road 4WD', "https://cdn.carbuzz.com/gallery-images/840x560/711000/0/711084.jpg")}>Select</button></div>

                </div>

              </div>

      </div>
    );
  };

export default CarsComp;