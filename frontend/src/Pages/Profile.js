// Profile Page

import React, { Component } from "react";
import NavbarComp from "../components/navbar";
import Axios from "axios";
import "../App.css";
import Image from 'react-bootstrap/Image'
import "../styles/Home.css";

class Profile extends Component {

  state = {
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
      url: "http://localhost:5000/user",
    }).then((res) => {
      if (res.data === "Please login first"){
        alert(res.data)
      }
      else{
        this.setState({ mobile: res.data.mobile,
          name: res.data.name,
          address: res.data.address});
      }
      
    });
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getbookings",
    }).then((res) => {
     
        this.setState({ booked: res.booked});      
      
    });
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getbucketlist",
    }).then((res) => {
      this.setState({ bucketlist: res.bucketlist});
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
            <Image src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1605781624/Profile2_enzllk.png" fluid />  
          </div>

          <section>
            <br/><br/><br/><br/>
            <h1>Welcome user <b>{this.state.name}</b>!</h1>
            {/* <button className="start-exploring" onClick={this.logout}>Logout</button> */}
            <h3>Registered Mobile number: <b>{this.state.mobile}</b> Delivery Address: <b>{this.state.address}</b></h3>
            <br></br>
            <h4> If you would like to update your number: <input type="text" onChange={this.handleNumChange}/>
            {/* <button onClick={this.updateNum}> Update Mobile </button> */}
            <button className="otherbuttons"onClick={this.updateNum}> Update Mobile</button>
            </h4> 
            <h4> If you would like to update your address: <input type="text" onChange={this.handleAddChange}/>
            {/* <button onClick={this.updateAdd}> Update Address </button>  */}
            <button className="otherbuttons"onClick={this.updateAdd}> Update address</button>
            </h4>

            <center>
              <button onClick={this.logout}> Logout</button>

            </center>
          </section>

        </div>
      );
    }
  }

export default Profile;