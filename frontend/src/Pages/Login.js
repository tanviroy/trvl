// Login Page

import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarComp from "../components/navbar";
import Axios from "axios"; // for making http requests
import GoogleButton from "react-google-button";
import "../App.css";

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {

    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then(function (res) {
      console.log(res);
      alert(res.data);
      
    });
  };

  const googleAuth = () => {
    window.open("http://localhost:5000/google");
  };

  
  return (
    <div className="login">

        <div className="header">
          <NavbarComp />
        </div>
      
      <div>
        <h1>Login</h1>
        <input
          placeholder="Email ID"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <br />
        <Link to="/profile">
        <button onClick={login}>Continue</button><br/>
        </Link>

        <center>
          <GoogleButton onClick={googleAuth}/>
        </center>

      </div>
      <br /><br />
      <div>Don't have an account yet? </div>
      <Link to={"/register"}>
        <h1>Sign Up Now!</h1>
      </Link>
    </div>
  );
}
