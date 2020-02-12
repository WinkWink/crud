const Product = require ('../models/product.model');

// simple version without validation or sanitation 
exports.test = function (req,res){
	res.send('greetings from the test controller');
};