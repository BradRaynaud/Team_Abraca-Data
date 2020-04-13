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

 
app.get("/signin", function(req, res) {
    MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        console.log("Verifying Authentication...");

        var myobj = {Username:"Simp-R-us", Password:"BigSImpBOI2005"};

        db.collection("Client").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("Sign in successful");
        });

        client.close();
        console.log("Connection closed");
    });
})



app.get('/signup', function (req, res) {
    console.log("Call recieved")
    unirest
    .post('http://Clientdata:4000/Client')
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .send({ "parameter": 23, "foo": "bar" })
    .then((response) => {
        console.log(response.body)
        res.status(200).json({"message": response.body});
  })
})


app.get("/forgot", function(req,res){
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        console.log("DB found");        
        
        db.collection("email").find({}).toArray(function(error, docs)
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









