const path = require('path')
const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression')
const pug = require('pug');
const weatherRouter = require('./routes/weatherRouter')

// setting up express 
const app = express();

app.use(compression())
// app.use(express.json());


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './views')

//setting up views
app.use(express.static(publicDirectoryPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set('views', viewsPath)


app.use(weatherRouter)


module.exports = app