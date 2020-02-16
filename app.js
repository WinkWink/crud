const express = require('express');
const bodyParser = require('body-parser');

// create an instance of our application 
const app = express();
// tell app to use the body parser module usingjson data sent from the client side to the server side
app.use(bodyParser.json());
const path = require('path');
const db = require("./db");
const collection = "inventory";

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getInventory',(req,res)=>{
    db.getDB().collection(collection).find({}).toArray((err,documents)=>{
        if(err)
            console.log(err)
        else{
            console.log(documents);
            res.json(documents);
        }
    });
})
// connect to database
db.connect((err)=>{
    if(err){
        console.log('unable to connect to db');
        // terminate the application
        process.exit(1);
    }else{
        app.listen(3000, () =>{
            console.log('connected to database, app listening on port 3000');
        });
    }
        
})
