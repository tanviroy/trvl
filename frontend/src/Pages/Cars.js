// Explore/Search Page

import React, { Component } from "react";
import "../App.css";
import "../styles/CarCard.css";
import NavbarComp from "../components/navbar";
import Axios from "axios";
// import HotelsComp from "../components/hotels";
// import CarsComp from "../components/cars";
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'


class ExploreCars extends Component {


  render() {
    return (
      
      <div>

        <div className="header">
          <NavbarComp />
        </div>

        <div className="carcard">
          <div className="left2">
            <select onChange = {this.handleSortChange} name="sortselect" id="sortselect">
                  <option value="none" defaultValue disabled hidden> Sort By </option>
                  <option value="p-asc">Price (Ascending)</option>
                  <option value="p-desc">Price (Descending)</option>
                </select>
          </div>
          <Link to="/explore-trvl">
          <button className="otherbuttons"onClick={this.updateNum}> Proceed</button>      
        </Link>
        </div>


        
        <div className='carcard'>
          <div className='carcard-image'>
          <Image src="https://assets.newatlas.com/dims4/default/bcf6274/2147483647/strip/true/crop/1620x1080+150+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Foriginal-bond-goldfinger-aston-martin-db5-auction-8.jpg" fluid />
          </div>
          <div className='carcard-name' >
            <h1>Luxury</h1>
          </div>
          <div className='carcard-price' >
            <h2>Starting at 877$ / hour</h2>
          </div>
          <div className='link' >
          <Link to="/profile" style={{ color: 'black' }}><h3>Book</h3></Link>
          </div>
        </div>

        <div className='carcard'>
          <div className='carcard-image'>
          <Image src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg?itok=QTxMln2k" fluid />
          </div>
          <div className='carcard-name' >
            <h1>Executive</h1>
          </div>
          <div className='carcard-price' >
            <h2>Starting at 239$ / hour</h2>
          </div>
          <div className='link' >
            <Link to="/profile" style={{ color: 'black' }}><h3>Book</h3></Link>
          </div>
          </div>

        <div className='carcard'>
          <div className='carcard-image'>
          <Image src="https://media.familyminded.com/ee/88/ee88b74994d2469c945f0128bcef0caa.jpeg" fluid />
          </div>
          <div className='carcard-name' >
            <h1>Family</h1>
          </div>
          <div className='carcard-price' >
            <h2>Starting at 50.99$ / hour</h2>
          </div>
          <div className='link' >
            <Link to="/profile" style={{ color: 'black' }}><h3>Book</h3></Link>
          </div>
          </div>

        <div className='carcard'>
          <div className='carcard-image'>
          <Image src="https://cdn.carbuzz.com/gallery-images/840x560/711000/0/711084.jpg" fluid />
          </div>
          <div className='carcard-name' >
            <h1>Off-Road</h1>
          </div>
          <div className='carcard-price' >
            <h2>Price varies by terrain</h2>
          </div>
          <div className='link' >
            <Link to="/profile" style={{ color: 'black' }}><h3>Book</h3></Link>
          </div>
        </div>

      </div>
    );
  }
}

export default ExploreCars;