var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/webDev-api');


var Product = require('./model/product');
var WishList = require('./model/wishlist');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(300, function(){
    console.log("API running on port 3000...");
});