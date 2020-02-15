const express = require('express');
const bodyParser = require('body-parser');

// create an instance of our application 
const app = express();
// tell app to use the body parser module usingjson data sent from the client side to the server side
app.use(bodyParser.json());
const path = require('path');
const db = require(./"db");
const collection = "inventory";
