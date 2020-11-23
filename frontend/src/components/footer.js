// This is the Footer Component for all pages - "FooterComp"

import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "../App.css";

export default class FooterComp extends Component {
  render() {
    return (
      <div className="footer">
        <div style={{ color: "#003060" }}>
          <b><h1 style={{fontWeight: "800", fontSize: "4rem", color: "white"}}>trvl.</h1></b>
          <br />
          <div className="wrapper">
            <li>
              <Nav.Link href="/about-us">
                About Us
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="https://github.com/hulikalruthu/approject2">
                Made with ❤️ by Tanvi, Soham and Ruthu
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="/terms-and-conditions">
                Terms and Conditions
              </Nav.Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
