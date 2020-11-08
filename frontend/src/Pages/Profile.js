// Profile Page

import React, { Component } from "react";
import Axios from "axios";
import "../App.css";

class Profile extends Component {


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
    
    render() {
      return (
        <div>
        
            <h1>Profile Page</h1>
            <center>
              <button style={{maxWidth: "10rem", padding: "0%", marginTop: "2%"}} onClick={this.logout}> Logout </button>
            </center>
  
        </div>
      );
    }
  }

export default Profile;