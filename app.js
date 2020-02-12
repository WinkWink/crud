const express = require ('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); //imports routes for the products

// init express app
const app = express();

app.use('/products', product);

// tell express to listen to this port 

let port = 1234;

app.listen(port, () => {

	console.log('server is up and running on port ' + port);

});

