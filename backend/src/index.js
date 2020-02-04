const express = require('express');
const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://admin:pass@database:27017';
 
// Database Name
const dbName = 'foodthings';


var options = {
    user: "admin",
    pass: "pass"
    };

// Create express app and add middleware
const app = express();
app.use(express.json());

 
app.get('/hello_world', function (req, res) {
    res.status(200).json({"message": 'Hello Clay'});
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

app.get("/mongoinsert", function(req, res) {
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

app.listen(8000, "0.0.0.0");






/* 
// Node.js mongodb queries are done like the example shown below
// Set a query variable and pass it into the find() function

var MongoClient = require('mongodb').MongoClient;
var url = "url" // replace url with actual website URL

MongoClient.connect(url, function(err, db)
{
    if (err) threw err;
    var dbo = db.db("mydb");
    var query = { attribute: "specification" };
    dbo.collection("collection").find(query).toArray(function(err, result)
    {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
*/