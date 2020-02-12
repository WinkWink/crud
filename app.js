const express = require ('express');
const bodyParser = require('body-parser');

// initialize our express app 
const app = express();

// tell express to listen to this port 

let port = 1234;

app.listen(port, () => {

	console.log('server is up and running on port ' + port);

});