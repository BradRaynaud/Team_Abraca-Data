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

app.get('/datastuff', function (req, res) {
    console.log("Call recived")
    unirest
    .post('http://datamining:5000/HelloWorld')
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .send({ "parameter": 23, "foo": "bar" })
    .then((response) => {
        console.log(response.body)
        res.status(200).json({"message": response.body});
  })
})

app.get('/signup', function (req, res) {
    const saltRounds = 12; // Number of Salt rounds

    // Place holder for actually recieving a plaintext password from frontend
    const myPlaintextPassword = 'password123';
    const someOtherPlaintextPasword = 'otherpassword123'

    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash){
        // Insert user information to DB here
        // CODE NOT YET FULLY FUNCTIONAL, FLESH OUT FULLY NEXT SPRINT
        /*
        var config = {
        host     : 'localhost',
        port     : "3306",
        username : 'root',
        password : 'example',
        database : 'users'};

        var connection = mysql.createConnection(config);
        
        connection.connect();
        
        connection.query('SELECT * FROM USERS', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        });
        */
        //connection.end();
        res.status(200).json({"username": "username", "passwordhash": hash})


        // ****************************
    })
})

app.get('/login', function (req,res) {
    const saltRounds = 12; // Number of Salt rounds
    
    // Retrieve LOGIN info from DB (UUID, HASH)
    // SQL CONNECTION STUFF GOES HERE

    // Place holder for actually recieving a plaintext password from frontend
    // FORMAT OUT OF THE REQUEST the UUID AND PASSWORD
    //
    const myPlaintextPassword = 'password123';
    const someOtherPlaintextPasword = 'otherpassword123'
    
    // Placeholder for retrieving hash from DB
    var hash = "$2b$12$LnoC8yEBpZmxiU66k/y7FexzOUy0iy3xCR8IZXdsxawrLmHtHz5uK"
    
    bcrypt.compare(myPlaintextPassword, hash).then(function(result){
        res.status(200).json({"message":result})
    })

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