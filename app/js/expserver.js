/**
 * Created by Fox on 2/27/2015.
 */
var hip = require('./hipchatter');
var express = require('express');
var app = express();

// Route One
app.get('/hipchat', function (req, res, next) {
    res.set({'Content-Type': 'text/plain','Access-Control-Allow-Origin':'http://localhost:63342'});
    res
});

var server = app.listen(1337, function() {
    console.log('Server started on port 1337');
});