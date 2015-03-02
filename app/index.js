/**
 * Created by Devon on 2/27/2015.
 */
var http = require("http");
var Hipchatter = require("hipchatter");
var hipchatter = new Hipchatter("c9UwjMpHscxU3ptto42jGtlWMK9wIwHb7h2U67dE");
var express = require("express");
var app = express();

//http.createServer(function(req, res){
//    console.log("Incoming request to " + req.url);
//
//    req.method = req.method.toUpperCase();
//    console.log(req.method + ' ' + req.url);
//
//
//});

app.get('/messages', function(req, res, next){
    console.log("Incoming request to " + req.url);
    req.method = req.method.toUpperCase();
    console.log(req.method + " " + req.url);
    var roomsArray = [];
    var messageArray = [];

    hipchatter.rooms(function(err,rooms){
        console.log(rooms.length);
        console.log(rooms[2]);
        console.log(rooms[2]['name']);
        for(i=0;i<rooms.length;i++){
            roomsArray.push(rooms[i]['name']);
        }
        console.log(roomsArray);


        for(i=0; i<roomsArray.length; i++){
            hipchatter.history(roomsArray[i], function(err,history){
                for(i=0;i<history.items.length;i++){
                    if(history.items[i]["from"]["name"] == "Sebastian Aliadad"){
                        console.log(history.items[i]["message"]);
                        messageArray.push(history.items[i]["message"]);
                    }
                }
            });
        }
        setTimeout(function(){
            console.log("length: " + messageArray.length);
            res.send(messageArray);
        }, 3000);

    });


    //for(i=0; i<roomsArray.length; i++){
    //    hipchatter.history(roomsArray[i], function(err,history){
    //        console.log("run" + i);
    //        for(i=0;i<history.items.length;i++){
    //            if(history.items[i]["from"]["name"] == "Sebastian Aliadad"){
    //                console.log(history.items[i]["message"]);
    //                messageArray.push(history.items[i]["message"]);
    //            }
    //        }
    //    });
    //}


    //hipchatter.history("Sodjan2015", function(err, history){
    //    var messageArray = [];
    //
    //
    //    //for(i=0; history.items.length; i++){
    //    //    if(history.items[i]["date"] == '2015-02-28'){
    //    //        messageArray.push(history.items[i]["message"])
    //    //    }
    //    //}
    //    //console.log(messagesArray);
    //    for(i=0;i<history.items.length;i++){
    //        if(history.items[i]["from"]["name"] == "Sebastian Aliadad"){
    //            messageArray.push(history.items[i]["message"])
    //        }
    //    }
    //    console.log(messageArray);
    //    console.log(messageArray.length);
    //});

});

//app.post('/sodenters', function(req,res){
//    console.log("something worked");
//    res.send("woooo");
//});

//var server = app.listen(1337, '192.168.101.155',function() {console.log('Server started on port 1337'); });
var server = app.listen(1337, function() {console.log('Server started on port 1337'); });