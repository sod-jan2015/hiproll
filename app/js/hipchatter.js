/**
 * Created by Fox on 2/27/2015.
 */
var express = require('express');
var app = express();
var Hipchatter = require('hipchatter');
var hipchatter = new Hipchatter('JbB8JRgZHLuGVEiH2O6Zv3Nl7zLlVxVbBO3YOoos');

// this will list all of your rooms
//hipchatter.rooms(function(err, rooms){
//    if(!err) console.log(rooms)
//});

// Route One
app.get('/hipchat/rooms', function (req, res, next) {
    res.set({'Content-Type': 'text/plain','Access-Control-Allow-Origin':'http://localhost:63342'});
    hipchatter.rooms(function(err, rooms){
        if(err) console.log(err);
        var roomlist = JSON.stringify(rooms);
        res.send(roomlist);
    });
});

// Route Two
app.get('/hipchat/hiproll', function (req, res, next) {
    res.set({'Content-Type': 'text/plain','Access-Control-Allow-Origin':'http://localhost:63342'});
    hipchatter.history('hiproll', function(err, history){
        if (err) console.log(err);
        var hist = JSON.stringify(history.items);
        res.send(hist);
    });
});

var server = app.listen(1337, function() {
    console.log('Server started on port 1337');
});

//hipchatter.create_webhook('Hipchatter Room',
//    {
//        url: 'http://yourdomain.com',
//        event: 'room_message'
//    }, function(err, webhook){
//        if (err == null) console.log('Successfully created webhook id:'+webhook.id+'.');
//    });