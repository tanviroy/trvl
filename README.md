# TRVL - the Travel App
> Project 2 for [CS-1202] Advanced Programming. This is a MERN stack e-commerce (multi-purpose travel booking) platform. This project was built by [Ruthu Rooparaghunath](https://github.com/hulikalruthu), [Soham De](https://github.com/actuallysoham), and [Tanvi Roy](https://github.com/tanviroy). 

## Quick Start
Open up a CLI, and execute the following commands:
```
$ git clone https://github.com/hulikalruthu/approject2.git
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

### Database
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
		<td>username: String,<br/>
  		googleId: String,<br/>
  		email: String,<br/>
  		password: String,<br/>
  		address: { type: String, default: "home" },<br/>
  		mobile: Number,<br/>
  		orders: [{ type: String }],<br/>
  		cart: [{ type: String }],<br/>
  		wishlist: [{ type: String }],</td><br/>
	</tr>
	<tr>
		<td>Products</td>
		<td>name: String,<br/>
  		description: String,<br/>
 		category: [{ type: String }],<br/>
 		color: [{type: String}],<br/>
 		gender: [{type: String}],<br/>
  		imageurl: String,<br/>
  		price: Number,<br/>
 		rating: [{ type: Number }],<br/>
  		reviews: [{ body: String, user: String, verified: String }],<br/>
  		buyers: [{ type: String }],<br/>
  		wishers: [{ type: String }],</td><br/>
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
Nearly all of the project code was written by us ourselves. We used documentation code for React Bootstrap, Express, and Passportjs where needed. 
* We scraped the hotel data from [Airbnb](https://www.airbnb.co.in/)
