// Login Page

import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarComp from "../components/navbar";
import Axios from "axios"; // for making http requests
import GoogleButton from "react-google-button";
import "../App.css";
import "../styles/register-login.css";


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
    <div>

    <div className="header">
       <NavbarComp />
    </div>
    
    
    <div style={{backgroundColor: "#003060", padding: "3%", marginBottom: "-5%"}}>
      
      <div className="login">

        <h1 style={{fontSize: "4rem"}}>Login 🏕️</h1><br />

        <input
          placeholder="Email ID"
          onChange={(e) => setLoginUsername(e.target.value)}
          className="input-box"
        />
        <br />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
          className="input-box"
        />
        <br /><br />

        <Link to="/profile">
          <button onClick={login}>Continue</button><br/>
        </Link>

        <br />

        or

        <br /><br />

        <center>
          <GoogleButton onClick={googleAuth}/>
        </center>

        <br />
        <div style={{fontSize: "medium"}}>Don't have an account yet? </div>
        <Link to={"/register"}>
          <h1 className="sign-up-text">Sign Up Now!</h1>
        </Link>

      </div>

    </div>

    </div>
  );
}
