// Profile Page

import React, { Component } from "react";
import NavbarComp from "../components/navbar";
import Axios from "axios";
import "../App.css";
import Image from 'react-bootstrap/Image'
import ProfileHotelsComp from "../components/profilehotels";
import ProfileBookedComp from "../components/profilebooked";
//import BookingComp from "../components/booking";


class Profile extends Component {

  state = {
    bucketlistedhotels: [],
    bookedhotels: [],
    address: "",
    name: "",
    mobile: 0,
    booked: [],
    bucketlist: [],
    modal: false,
    newmobile: 0,
    newaddress: "",
  };

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getuser",
    }).then((res) => {
      if (res.data === "Please login first"){
        alert(res.data)
      }
      else{
        this.setState({ mobile: res.data.mobile,
          name: res.data.name,
          address: res.data.address,
          booked: res.data.booked,
          bucketlist: res.data.bucketlist,
          visited: res.data.visited});
        console.log(res.data)
      }
      
    });

    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getbucketlist",
    }).then((res) => {
        this.setState({ bucketlistedhotels: res.data });
    });

  };

    logout = () => {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:5000/logout",
      }).then((res) => {
        alert("You are logged out!");
        //console.log(res.data);
      });
    };


    updateNum = () => {
      Axios({
        method: "POST",
        data: {
          mobile: this.state.newmobile,
        },
        withCredentials: true,
        url: "http://localhost:5000/update/number",
      }).then((res) => console.log(res));
      window.location.reload(false);
    };
  
    updateAdd = () => {
      Axios({
        method: "POST",
        data: {
          address: this.state.newaddress,
        },
        withCredentials: true,
        url: "http://localhost:5000/update/address",
      }).then((res) => console.log(res));
      window.location.reload(false);
    };
  
    handleNumChange = async(e) => {
      await this.setState({newmobile: e.target.value});
    }
  
    handleAddChange = async(e) => {
      await this.setState({newaddress: e.target.value});
    }

    render() {
      return (
        <div>
          <div className="banner">
            <NavbarComp />
            <Image src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1605781624/Profile2_enzllk.png"  width="100%"/>  
          </div>

          <section style={{backgroundColor: "#003060", padding: "2%", marginBottom: "-5%"}}>
            <br/><br/><br/><br/>
            <div className="login">
            <h1>Welcome <b>{this.state.name}</b>! 🌎</h1>
      
            <h3>Registered Mobile number: <b>{this.state.mobile}</b> Registered Address: <b>{this.state.address}</b></h3>
            <br></br>
            <h4> Update your number 📞: &nbsp;<input className="input-box" type="text" onChange={this.handleNumChange}/>
            &nbsp; &nbsp;
            <button className="otherbuttons" onClick={this.updateNum}> Update Mobile</button>
            </h4> 
            <h4> Update your address 🏡: &nbsp;<input className="input-box" type="text" onChange={this.handleAddChange}/>
            &nbsp; &nbsp;
            <button className="otherbuttons" onClick={this.updateAdd}> Update address</button>
            </h4>

            <br />

            <center>
              <button className="logout" onClick={this.logout}> Logout</button>
            </center>

            </div>
          </section>

          <section style={{backgroundColor: "#003060", padding: "2%", marginBottom: "-5%"}}>
            <br/><br/><br/><br/>
            <div className="login">
            <h1><b>Your Bookings</b></h1>
            <ProfileBookedComp hotels={this.state.booked}/>
            <br/>
            <h1><b>Your Bucketlisted Hotels</b></h1>
            <ProfileHotelsComp hotels={this.state.bucketlistedhotels}/>

            <br/>
      

            </div>
          </section>

        </div>
      );
    }
  }

export default Profile;