// Explore/Search Page

import React, { Component } from "react";
import "../App.css";
import "../styles/explore.css";
import NavbarComp from "../components/navbar";
import Axios from "axios";
import HotelsComp from "../components/hotels";


class Explore extends Component {

  state = {
    hotels: [],
    searchloc: '',
    datefrom: new Date(),
    dateto: new Date(),

  };

  handleLocChange = async(e) =>{
    await this.setState({searchloc: e.target.value});
  }

  handleDateFromChange = async(e) =>{
    await this.setState({datefrom: e.target.value});
  }

  handleDateToChange = async(e) =>{
    await this.setState({dateto: e.target.value});
  }

  handleSearchClick = async(e) =>{
    e.preventDefault();
    Axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/hotelsearch",
      data:{
        searchloc: this.state.searchloc,
        datefrom: this.state.datefrom,
        dateto: this.state.dateto
      }
    }).then((res) => {
      this.setState({ hotels: res.data });
      console.log(res.data);
    });
    //console.log(this.state.searchloc);
    //console.log(this.state.datefrom);
  }

  handleSortChange = async(e) =>{
    console.log(e.target.value);

    let list = this.state.hotels;
    if (e.target.value === 'p-asc'){
      list.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    if (e.target.value === 'p-desc'){
      list.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    if (e.target.value === 'r-asc'){
      list.sort(function (a, b) {
        return a.rating[0] - b.rating[0];
      });
    }
    if (e.target.value === 'r-desc'){
      list.sort(function (a, b) {
        return b.rating[0] - a.rating[0];
      });
    }
    await this.setState({ hotels: list });

  }


  render() {
    return (
      <div>

        <div className="header">
          <NavbarComp />
        </div>

        <div className="search">
        <form action="#">
          <div className="search1" data-panel-bounds="true">
            <div className="destination">
              <div className="search-input">
                <input type = "text" name = "Destination" placeholder = "Where to?" onChange={this.handleLocChange}/>
              </div>
            </div>
          <div className="separator"></div>

          <div className="dates">
            <div className="checkin">
              <div className="search-input">
                <input type = "date" name = "From" placeholder = "From"  onChange={this.handleDateFromChange}/>
              </div>
            </div>
            <div className="separator"></div>
            <div className="checkout">
              <div className="search-input">
                <input type = "date" name = "To" placeholder = "To"  onChange={this.handleDateToChange}/>
              </div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="guests">
            <div className="search-input">
              <div className="guest-num">
                <select name="guests" id="guests">
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                </select>
              </div>
            </div>
          </div>

          <div className="button-container">
                <button type="submit" className="search-button" onClick={this.handleSearchClick}>Get</button>
          </div>
          
          </div>
        </form>
       
        </div>

        <div className="container2">
          <div className="left2">
            <select onChange = {this.handleSortChange} name="sortselect" id="sortselect">
                  <option value="none" defaultValue disabled hidden> Sort By </option>
                  <option value="p-asc">Price (Ascending)</option>
                  <option value="p-desc">Price (Descending)</option>
                  <option value="r-asc">Rating (Ascending)</option>
                  <option value="r-desc">Rating (Descending)</option>
                </select>
          </div>


          <div className="right2">
            <HotelsComp hotels={this.state.hotels} datefrom={this.state.datefrom} dateto={this.state.dateto} />
          </div>
        </div>

      </div>
    );
  }
}

export default Explore;