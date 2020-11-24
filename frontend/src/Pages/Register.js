// Register/ SignIn Page

import React, { useState } from "react";
import NavbarComp from "../components/navbar";
import Axios from "axios"; // for making http requests
import "../App.css";
import {Link} from 'react-router-dom'

export default function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerMobile, setRegisterMobile] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");


  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        mobile: registerMobile,
        email: registerEmail,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then(function (res) {
      console.log(res);
      alert(res.data);
    });
  };


  
  return (

    <div>

    <div className="header">
      <NavbarComp />
    </div>
      
    <div className="login">

      <div>

        <br />

        <h1 style={{fontSize: "4rem"}}>Register Now! ⚓</h1><br />

        <input
          placeholder="Name"
          onChange={(e) => setRegisterUsername(e.target.value)}
          className="input-box"
        />
        <br />

        <input
          placeholder="Mobile Number"
          onChange={(e) => setRegisterMobile(e.target.value)}
          className="input-box"
        />
        <br />

        <input
          placeholder="Email ID"
          onChange={(e) => setRegisterEmail(e.target.value)}
          className="input-box"
        />
        <br />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
          className="input-box"
        />
        <br /><br />
        <Link to='/login'> 
        <button onClick={register}>Submit</button>
        </Link>

      </div>
      <br /><br />

    </div>

    </div>
  );
}
