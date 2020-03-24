const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const unirest = require('unirest');
const bcrypt = require('bcrypt');
var mysql = require('mysql');

// Connection URL
const url = 'mongodb://root:example@mongo:27017';
 
// Database Name
const dbName = 'foodthings';


var options = {
    user: "admin",
    pass: "pass"
    };

// Create express app and add middleware
const app = express();
app.use(express.json());

 
app.get("/forgot", function(req, res) {
    MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        console.log("DB found");

        var myobj = {title: "Grilled Chicken", difficulty: "chicken", time: "chicken", ingredients: {1: "chicken", 2: "olive oil", 3: "seasoning"}, steps: {1: "Place chicken on pan", 2: "Simmer chicken on medium heat", 3: "Put chicken on plate when done cooking"}};

        db.collection("recipes").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 recipe inserted");
        });

        client.close();
        console.log("Connection closed");
    });
})



app.get('/forgot', function (req, res) {
    console.log("Call recieved")
    unirest
    .post('http://datamining:5000/HelloWorld')
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .send({ "parameter": 23, "foo": "bar" })
    .then((response) => {
        console.log(response.body)
        res.status(200).json({"message": response.body});
  })
})


app.get("/mongoroute", function(req,res){
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        console.log("DB found");        
        
        db.collection("recipes").find({}).toArray(function(error, docs)
        {
            if (error) throw error;
            console.log("Found the following records");
            
            console.log(docs.name);
            res.status(200).send(docs);
        });
        
        //console.log(query);
        
        client.close();
        console.log("Connection closed");
    });
})









