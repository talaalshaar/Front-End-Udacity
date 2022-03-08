// Setup empty JS object to act as endpoint for all routes
projectData = [];
//VlTrUlwJd7ZYy8etJPwkw8Mqa1jZCMzaEJmy7bV6

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser')

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 8000;


// Setup Server
const server = app.listen(port, listening);
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}


app.get('/all', function sendData(req, res) {
    res.send(projectData);
    //console.log(projectData);
});

app.post('/addData', addData)
function addData(req, res) {
    console.log(req.body)
    // newEntry = {
    //     temperature: req.body.temperature,
    //     date: req.body.date,
    //     response: req.body.response
    // }
    projectData = req.body;
	res.send(projectData);
}
