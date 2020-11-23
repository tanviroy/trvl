// Flight Search Page

import React, { Component } from "react";
import "../App.css";
import "../styles/explore.css";
import NavbarComp from "../components/navbar";
import Axios from "axios";
import FlightsComp from "../components/flights";
import HotelsComp from "../components/hotels";



class Flight extends Component {


  state = {
    hotels: [],
    flights: [],
    source: '',
    destination: '',
    datefrom: new Date(1999,0,1),
    dateto: new Date(1999,0,1),
    days: 0,
    flightPrice: 0,
    hotelPrice: 0,
    carPrice: 0,
    progress: 1,
    hotelSelectID: '',
  };

  componentDidMount = async(e) =>{

    Axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/hotelsearch",
      data:{
        searchloc: this.state.destination,
        datefrom: this.state.datefrom,
        dateto: this.state.dateto
      }
    }).then((res) => {
      this.setState({ hotels: res.data });
      console.log(res.data);
    });
    
  }

  handleSourceChange = async(e) =>{
    await this.setState({source: e.target.value});
  }
  handleDestinationChange = async(e) =>{
    await this.setState({destination: e.target.value});
  }

  handleDateFromChange = async(e) =>{
    await this.setState({datefrom: e.target.value});
  }

  handleDateToChange = async(e) =>{
    await this.setState({dateto: e.target.value});
    var d1 = new Date(this.state.dateto);
    var d2 = new Date(this.state.datefrom);
    var diff_time = d1.getTime() - d2.getTime();
    var diff_days = diff_time/ (1000 * 3600 * 24);
    this.setState({days: diff_days});
  }

  handleSearchClick = async(e) =>{
    e.preventDefault();
    var d = new Date('2000-01-01');
    var d1 = new Date(this.state.dateto);
    var d2 = new Date(this.state.datefrom);
    if (this.state.source==='' || this.state.destination===''|| d1 < d || d2 < d){
        alert("Please fill all fields to proceed!")
    }
    else if (d1<d2){
        alert("You can't travel back in time, sweetie")
    }
    else{
        Axios({
            method: "POST",
            withCredentials: true,
            url: "http://localhost:5000/date",
            data:{
              arrival: this.state.dateto,
              locationDeparture: this.state.source,
              locationArrival: this.state.destination,
            }
          }).then((res) => {
            this.setState({ flights: res.data.data });
            //console.log(res.data.data);
          });
    }
   
  }

  handleSortChange = async(e) =>{
    console.log(e.target.value);

    let list = this.state.flights;
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
    await this.setState({ hotels: list });

  }

  selectFlight = (price) =>{
    this.setState({flightPrice:price});
  }

  selectHotel = (price, id) =>{
    this.setState({hotelPrice:price});
    this.setState({hotelSelectID:id});
  }

  handleProceed = () => {
      this.setState({progress: this.state.progress+1});
      //console.log(this.state.progress);
      Axios({
        method: "POST",
        withCredentials: true,
        url: "http://localhost:5000/hotelsearch",
        data:{
          searchloc: this.state.destination,
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
  handleBackProceed = () => {
    this.setState({progress: this.state.progress-1});
    //console.log(this.state.progress);
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
                <input type = "text" name = "Destination" placeholder = "Where from?" onChange={this.handleSourceChange}/>
              </div>
            </div>
          <div className="separator"></div>
          <div className="destination">
              <div className="search-input">
                <input type = "text" name = "Source" placeholder = "Where to?" onChange={this.handleDestinationChange}/>
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

                <hr/>

            Flight Price: {this.state.flightPrice}<br/>
            Hotel Price: {this.state.hotelPrice} x {this.state.days} nights<br/>
            Car Price: {this.state.carPrice} x {this.state.days} days<br/>
            <hr/>
            <b>Subtotal: </b>{(parseFloat(this.state.flightPrice) + parseFloat(this.state.hotelPrice)*parseInt(this.state.days) + parseFloat(this.state.carPrice)*parseInt(this.state.days))}<br/>
            <button className="proceed-button" onClick={this.handleProceed}>Proceed</button>
            {this.state.progress===1?
            null:<button className="proceed-button" onClick={this.handleBackProceed}>Go Back</button>}
            
          </div>
          


          <div className="right2">

              {this.state.progress === 1
                ? <div><h2>Select Flights</h2>
                <FlightsComp flights={this.state.flights} selectFlight={this.selectFlight}/></div>
                : <div><h2>Select Hotels</h2>
                <HotelsComp hotels={this.state.hotels} datefrom={this.state.datefrom} dateto={this.state.dateto}  selectHotel={this.selectHotel}/></div>}
              
          </div>
        </div>

      </div>
    );
  }
}

export default Flight;