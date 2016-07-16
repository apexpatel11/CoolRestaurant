// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// (DATA)
// =============================================================
var customers = [{
	customerName: "Test",
	phoneNumber: "5555555",
	customerEmail: "example@example.com",
	customerID: "Hello"
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/viewTables', function(req, res){
	res.sendFile(path.join(__dirname, 'viewTables.html'));
})

app.get('/reserveTable', function(req, res){
	res.sendFile(path.join(__dirname, 'reserveTable.html'));
})

// Search for Specific Character (or all characters) - provides JSON
// app.get('/api/:characters?', function(req, res){

// 	var chosen = req.params.characters;

// 	if(chosen){
// 		console.log(chosen);

// 		for (var i=0; i <characters.length; i++){

// 			if (chosen == characters[i].routeName){
// 				res.json(characters[i]);
// 				return;
// 			}
// 		}

// 		res.json(false);
// 	}

// 	else{
// 		res.json(characters);
// 	}
// })

// Create New Customers - takes in JSON input
app.post('/api/tables/new', function(req, res){

	var newCustomer = req.body;

	console.log(newCustomer);

	customers.push(newCustomer);

	res.json(newCustomer);
})

app.post('/api/waitlist/new', function(req, res){

	var newCustomer = req.body;

	console.log(newCustomer);

	customers.push(newCustomer);

	res.json(newCustomer);
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})