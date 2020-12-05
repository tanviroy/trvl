// Individual Hotel Page 

import React, { Component } from "react";
import "../App.css";
import "../styles/hotel.css";
import NavbarComp from "../components/navbar";
import Axios from "axios";
// below line adds libraries needed for google map embedding
//import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
//import ReactMapGL, { Marker, Popup } from "react-map-gl";
//import { useState, useEffect } from "react";
import Map from "../components/hotelmap2"
import ReviewsComp from "../components/reviews";



class Hotel extends Component {

  state = {
    hotels: [],
    newreview: "",
    datefrom: "",
    dateto: "",
    mindate: new Date('2010-01-01'),
  };

  componentDidMount() {
    let url = window.location.pathname
    //console.log(url.split("/"))
    this.setState({datefrom: url.split("/")[3] })
    this.setState({dateto: url.split("/")[4] })

    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/gethotelbyid/" + url.split("/")[2] + "/" + url.split("/")[3] + "/" + url.split("/")[4] ,
    }).then((res) => {  
      if (res.data){
        this.setState({hotels: res.data });
        console.log(this.state.hotels[0].coords[0]);
      }
    });
  }

  handleBucketList(){
    let url = window.location.pathname
    let hotel_id = url.split("/")[2]

    Axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/addtobucketlist/" + hotel_id,
    }).then((res) => {  
      if (res.data){
        console.log(res.data);
      }
    });
  }

  handleChange = async(e) => {
    await this.setState({newreview: e.target.value});
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    let url = window.location.pathname
    //console.log(this.state.newreview);
    //console.log("New review be added");
    Axios({
      method: "POST",
      data: {
        review: this.state.newreview,
        hotelId: url.split("/")[2],
      },
      withCredentials: true,
      url: "http://localhost:5000/addreview",
    }).then(function (res) {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });
  }

  handleBook(){
    let url = window.location.pathname

    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        hotelID: url.split("/")[2],
        datefrom: url.split("/")[3],
        dateto: url.split("/")[4]
      },
      url: "http://localhost:5000/bookhotel",
    }).then((res) => {  
      if (res.data){
        console.log(res.data);
      }
    });
  }


  render() {
    return (

    <div style={{paddingBottom: "5%"}}>

    {this.state.hotels.map((hotel) =>(
      <li key={hotel.name}>
        
        <div className="hotel-banner">
          <NavbarComp />
          <img
            className="ihotel-img"
            src={hotel.imageurl}
            alt="hotel"
          />
        </div>

        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
            <circle cx="55" cy="55" r="55" fill="white" />
            <text x="32" y="64" fill="black" fontSize="xx-large" position="absolute">{hotel.rating}</text>
        </svg>


        <div className="container4">

         <div className="left4">
          <div style={{fontSize: "3rem", color: "#003060"}}>{hotel.name}</div><br />
          <div style={{color: "grey", marginTop: "-1%", position: "relative"}}>{hotel.location}</div><br />
          <div><p>${hotel.price}</p></div><br />
          <div><p style={{fontWeight: "600"}}>Hotel Description:</p>
          {hotel.desc}</div><br />
          <div><p style={{fontWeight: "600"}}>Hotel Amenities:</p>
            <ul>{hotel.amenities.map(name => <li style={{listStyleType: "disc"}} key={name}> {name} </li>)}</ul>
          </div><br />
          <h2>{ (this.state.datefrom.includes('%'))?"null":this.state.datefrom + " to " }{ (this.state.dateto.includes('%'))?"null":this.state.dateto}</h2>

          <br />

          <button onClick={this.handleBook}>Book Now</button> &nbsp; &nbsp; &nbsp;
          <button onClick={this.handleBucketList}>Add to Bucket List</button>

          <h1>Product Reviews</h1>
            <center>
              <ReviewsComp hotels={this.state.hotels} />
            </center>

            <h1 style={{marginTop: "3%"}}>Want to review this hotel?</h1>
            <form onSubmit={this.handleSubmit}>
              <label style={{width: "50%"}}>
                <textarea value={this.state.newreview} onChange={this.handleChange} placeholder="Add your review here!" />
                <input className="review-btn" type="submit" value="Submit" />
              </label>
            </form>
          
         </div>

         <div className="right4">
           {/* <div className="Hotel">
           <Map google={this.props.google} />
           </div> */}

           {this.state.hotels.length != 0
           ?<Map lat={41.8719} long={12.5674} hotel={this.state.hotels}/>
          :null}
           
          
         </div>

        </div>
      
      </li> 
        
        ))}
          
    </div>
    );
  }
}
 
export default Hotel;
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyB5ANN8IBUuZkmw1SWY9TpvF3wpG96XcQY')
//  })(Hotel);