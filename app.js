const express = require('express');
const bodyParser = require('body-parser');

// create an instance of our application 
const app = express();
// tell app to use the body parser module usingjson data sent from the client side to the server side
app.use(bodyParser.json());
const path = require('path');
const db = require("./db");
const collection = "inventory";

db.connect((err)=>{
    if(err){
        console.log('unable to connect to db');
        process.exit(1);
    }else{
        app.listen(3000, () =>{
            console.log('connected to database, app listening on port 3000');
        });
    }
        
})
