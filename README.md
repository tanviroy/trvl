# TRVL - the Travel App
> Project 2 for [CS-1202] Advanced Programming. This is a MERN stack e-commerce (multi-purpose travel booking) platform. This project was built by [Ruthu Rooparaghunath](https://github.com/hulikalruthu), [Soham De](https://github.com/actuallysoham), and [Tanvi Roy](https://github.com/tanviroy). 

## Quick Start
Open up a CLI, and execute the following commands:
```
$ git clone https://github.com/tanviroy/trvl.git
$ cd approject2

$ cd backend 
$ npm install
$ npm start

$ cd frontend
$ npm install
$ npm start
```
This should get the server to run at localhost:5000 and frontend to run at localhost:3000

## Project Details
This project was built using the MERN stack of technologies.

### Major Technologies Used
![techstack](https://user-images.githubusercontent.com/61850850/96565848-8482b700-12e2-11eb-8e6c-3e0f04c98289.png)

<br/>
<table>
<thead>
<tr>
<th>Area</th>
<th>Technology</th>
</tr>
</thead>
<tbody>
	<tr>
		<td>Front-End</td>
		<td>React, React-Bootstrap, CSS3</td>
	</tr>
	<tr>
		<td>Authentication</td>
		<td>Passport.js, bcrypt.js</td>
	</tr>
	<tr>
		<td>Back-End</td>
		<td>Node.js, Express, Mongoose</td>
	</tr>
	<tr>
		<td>Cookie/Database Management</td>
		<td>CookieParser, MongoDB, Mongoose</td>
	</tr>
</tbody>
</table>
<br/>

### External APIs Used
We used the [Amadeus API](https://developers.amadeus.com/self-service/category/air) for getting real-time flight data and the [Airhex API](https://airhex.com/api/logos/) to render airline carrier logos. 

### Database
We used 2 databases - one for all users and another for the hotels. <br/>
<table>
<thead>
<tr>
<th>Defined Schemas</th>
<th>Schema fields</th>
</tr>
</thead>
<tbody>
	<tr>
		<td>Users</td>
		<td>name: String,  <br/>
  		googleId: String,<br/>
 		email: String,<br/>
  		password: String,<br/>
  		address: { type: String, default: "home" },<br/>
  		mobile: Number,<br/>
  		booked: [{ source: String, destination: String, dateto: String, datefrom: String, hotelId: String, hotelcost: Number, carcost: Number, flightcost: Number }],<br/>
  		bucketlist: [{ type: String }],<br/>
  		visited: [{ type: String }],</td><br/>
	</tr>
	<tr>
		<td>Hotels</td>
		<td>name: String,  <br/>
  		location: String,<br/>
  		price: String,<br/>
  		desc: String,<br/>
  		imageurl: [{ type: String }],<br/>
  		amenities: [{ type: String }],<br/>
  		iata: [{ type: String }],<br/>
  		rating: [{ type: Number }],<br/>
  		reviews: [{ body: String, user: String, verified: String }],<br/>
  		bookers: [{ type: String }],<br/>
  		available: [{ date: Date, rooms: Number }],<br/>
  		bucketlisted: [{ type: String }],</td><br/>
	</tr>
	
</tbody>
</table>
<br/>

### Codebase Structure 
```
.
├── backend/
│   ├── hotels.js
│   ├── package.json
│   ├── passportConfig.js
│   ├── server.js
│   └── user.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── Pages/
│   │   ├── components/
│   │   ├── styles/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
├── airbnb-scraper github.py
├── helper.txt
└── README.md
```

### Code Documentation
For a more detailed documentation of our code and the complete list of project dependencies see [helper.txt](helper.txt).

### Design
The Figma wireframe for the project can be viewed [here](https://www.figma.com/file/8ca3Pgt9jp1zMfXJj0aIiH/AP-Project-2-E-Travel?node-id=0%3A1)

## Demo

### Home Page

### Explore - Search Flights, Hotels, and Cab Rentals

### Hotel Page - Details and Reviews 

### Login Page - Register, Login with TRVL account or Google OAuth

### User Profile - Update Info, View User Insights

## Citations
Nearly all of the project code was written by us ourselves. We used documentation code for React Bootstrap, Express, MapBox, and Passportjs where needed. 
* We scraped the hotel data from [Airbnb](https://www.airbnb.co.in/)
