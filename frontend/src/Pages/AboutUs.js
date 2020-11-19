// Home Page

import React, { Component } from "react";
import "../App.css";
import "../styles/textoverimage.css";
import "../styles/Switch.css"
import {Link} from 'react-router-dom'
import NavbarComp from "../components/navbar";
import CarouselComp from "../components/carousel";
import Image from 'react-bootstrap/Image'


class AboutUs extends Component {
  
  render() {
    return (
    <div>

    <section>
      <div className="banner">
        <NavbarComp />
        <Image src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1605612159/about-min_wseesp.png" fluid />

        {/* <CarouselComp /> */}
      </div>
    </section>

    <div className="container" style={{marginTop: "5%"}}>

    {/* <h1>About Us</h1>  */}
    <br/><br/><br/><br/>

    <p style={{textAlign: "left", fontSize: "large"}}>
    

    <br/><br/><br/><br/>
    <h2>Helping your trvl</h2> 
    At trvl we love to help people find their perfect destination. We love creating connections between people and places, and enable thousands of travelers to have unique experiences every moment. Our company was created from a desire to help people find a sense of home in new environments. Our business works by connecting travelers to hosts, 182 countries and 90,000 destinations. Since since our inception in 2018, we have become synonymous with international hospitality, and pioneers in the travel industry. Our services are powered by technology, strong teamwork, and round the clock customer support. With more and more of the world coming online, more people look to online services to book vacations, business trips and adventures.
    <br/><br/><br/>



    <h2> <div></div></h2> 

    <br/><br/><br/>
    <p>Keep Exploring!</p> 
    <Link to="/explore-trvl">
      <button className="otherbuttons"onClick={this.updateNum}> Check out our fabulous venues</button>      
    </Link>

    <br/><br/><br/>

    </p>
    </div>
  </div>
    );
  }
}

export default AboutUs;