import React, { useState } from "react";
import Axios from "axios";
import NavbarComp from "../components/navbar";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [amenities, setAmenities] = useState("");
  const [rating, setRating] = useState("");

  const addItem = () => {
    Axios({
      method: "POST",
      data: {
        name: name,
        location: location,
        desc: desc,
        imageurl: imageurl,
        price: price,
        rating: rating,
        amenities: amenities,

      },
      withCredentials: true,
      url: "http://localhost:5000/addhotel",
    }).then((res) => console.log(res));
  };

  return (
    <div className="cart">
        <div className="header">
          <NavbarComp />
        </div>
      <h1>Add new hotel here</h1><br/>

      <input
        placeholder="Hotel name"
        onChange={(e) => setName(e.target.value)}
      /><br/>
      <input
        placeholder="Add a description"
        onChange={(e) => setDesc(e.target.value)}
      /><br/>
      <input
        placeholder="Add Location"
        onChange={(e) => setLocation(e.target.value)}
      /><br/>
      <input
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
      /><br/>
      <input
        placeholder="Enter amenities separated by a comma"
        onChange={(e) => setAmenities(e.target.value.split(","))}
      /><br/>
      <input
        placeholder="Enter rating separated by space"
        onChange={(e) => setRating(e.target.value.split(" "))}
      /><br/>
      <input
        placeholder="Enter image URL separated by space"
        onChange={(e) => setImageurl(e.target.value.split(" "))}
      /><br/>

      <button onClick={() => addItem()}>Add Product to DB</button>

    </div>
  );
}
