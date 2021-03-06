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

var userinfo = {
    user: "thisisatest",
    password: "thisisatest"
};

// Create express app and add middleware
const app = express();
app.use(express.json());
 
app.post('/hello_world', function (req, res) {
    console.log(req.body);
    res.status(200).json({"message": 'Hello World'});
})

app.get('/mealplantest', function (req, res) {
    console.log(req.body);
    res.status(200).json({mealplan : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]});
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

app.get("/idquery", function(req, res) {
    MongoClient.connect(url, function(err, client) {
        //console.log("Connected successfully to server");

        const db = client.db(dbName);
        
        var params = {};
        params["ID"] = parseInt(req.query.id)

        //console.log(params);

        //console.log("DB found");        
        
        db.collection("recipes").find(params).toArray(function(error, docs)
        {
            if (error) throw error;
            //console.log("Found the following records");
            
            //console.log(docs.name);
            res.status(200).send(docs);
        });
        
        client.close();
        //console.log("Connection closed");
    });
})

app.get("/miningquery", function(req, res) {
    MongoClient.connect(url, function(err, client) {
        //console.log("Connected successfully to server");
        //console.log(req.query.tags);
        const db = client.db(dbName);
        var params = {};
        var calories = req.query.calories;
        params["Tags"] = req.query.tags.split(",");
        //console.log(calories);
        if (calories != null){
            //params["Nutrition"] = {0:{$lte: parseInt(calories)}}
            db.collection("recipes").find({"Tags":req.query.tags.split(","),"Nutrition.0":{$lte: parseFloat(calories)}},{projection:{_id:0,ID:1, Nutrition:1}}).toArray(function(error, docs)
            {
                //console.log("Made it into the if statement")
                if (error) throw error;
                //console.log("Found the following records");
                //console.log(docs.name);
                res.status(200).send(docs);
            });
        } else {
            db.collection("recipes").find(params, {projection:{_id:0,ID:1, Nutrition:1}}).toArray(function(error, docs)
            {
                if (error) throw error;
                //console.log("Found the following records");
                //console.log(docs.name);
                res.status(200).send(docs);
            });
        }
        
        

        //console.log(params);

        //console.log("DB found");        
        //res.status(200).send(params)
        
        
        client.close();
        //console.log("Connection closed");
    });
})

app.post('/datastuff', function (req, res) {
    console.log(req.body)
    unirest
    .post('http://datamining:5000/HelloWorld')
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .send({"id":req.body.ID, 
        "calories": req.body.calories, 
        "fat": req.body.fat, 
        "cholesterol":req.body.cholesterol, 
        "protein":req.body.protein,
        "sodium":req.body.sodium,
        "carbohydrates":req.body.carbohydrate
})
    .then((response) => {
        console.log("I get here")
        console.log(response.body)
        res.status(200).json({"message": response.body});
  })
})

app.get('/signup', function (req, res) {
    const saltRounds = 12; // Number of Salt rounds
    var con = mysql.createConnection({
        host:"mysql",
        user: "root",
        password: "example",
        database: "users"
    });
    
    con.connect();
    bcrypt.hash(userinfo.password, saltRounds, function(err, hash){
        // Insert user information to DB here

        
        con.query(`SELECT username FROM users WHERE username = '${userinfo.user}'`, function(err, result, fields){
            if (err) throw err;
            if (result.length > 0) {
                res.status(200).json({"Message" : "This account already exists"})
            } else {
                con.query(`INSERT INTO users (username, password) VALUES ('${userinfo.user}', '${hash}')`, function(err, result){
                    if (err) throw err;
                    res.status(200).json({"Message" : "Account successfully stored"})
                });
            }
        });
        
        //res.status(200).json({"username": "username", "passwordhash": hash})
        // ****************************
    })
})

app.get('/login', function (req,res) {
    const saltRounds = 12; // Number of Salt rounds
    var con = mysql.createConnection({
        host:"mysql",
        user: "root",
        password: "example",
        database: "users"
    });
    
    con.connect();

    console.log("Connected");
    con.query(`SELECT * FROM users WHERE username = '${userinfo.user}'`, function(err, result, fields){
        if (err) throw err;
        console.log(result)
        if (result.length == 0) {
            res.status(200).json({"Message" : "This account does not exist"})
        } else {
            bcrypt.compare(userinfo.password, result[0].password).then(function(result){
                res.status(200).json({"message":result})
            })
        }   
    });
})

app.get('/mealplanget', function (req,res) {
    var user = req.query.user;
    user = user.toLowerCase();
    var con = mysql.createConnection({
        host:"mysql",
        user: "root",
        password: "example",
        database: "mealplans"
    });
    
    con.connect();

    console.log("Connected");
    con.query(`SELECT meal1,meal2,meal3,meal4,meal5,meal6,meal7,meal8,meal9,meal10,meal11,meal12,meal13,meal14,meal15,meal16,meal17,meal18,meal19,meal20,meal21 FROM mealplans WHERE username = '${user}'`, function(err, result, fields){
        if (err) throw err;
        console.log(result)
        if (result.length == 0) {
            res.status(200).json({"Message" : "This account does not exist"})
        } else {
            var mealplan = [result[0].meal1,result[0].meal2,result[0].meal3,result[0].meal4,result[0].meal5,result[0].meal6,result[0].meal7,result[0].meal8,result[0].meal9,result[0].meal10,result[0].meal11,result[0].meal12,result[0].meal13,result[0].meal14,result[0].meal15,result[0].meal16,result[0].meal17,result[0].meal18,result[0].meal19,result[0].meal20,result[0].meal21];
            res.status(200).json({mealplan})            
        }   
    });
})

app.get('/mealplanstore', function (req,res) {
    var user = req.query.user;
    user = user.toLowerCase();
    var recipes = req.query.recipes.split(",");
    //recipes.unshift(user);
    var con = mysql.createConnection({
        host:"mysql",
        user: "root",
        password: "example",
        database: "mealplans"
    });
    
    con.connect();
    console.log("Connected");

    con.query(`SELECT * FROM mealplans WHERE username = '${user}'`, function(err, result, fields){
        if (err) throw err;
        console.log(result)
        if (result.length != 0) {
            con.query(`REPLACE INTO mealplans VALUES ('${user}',${recipes[0]},${recipes[1]},${recipes[2]},${recipes[3]},${recipes[4]},${recipes[5]},${recipes[6]},${recipes[7]},${recipes[8]},${recipes[9]},${recipes[10]},${recipes[11]},${recipes[12]},${recipes[13]},${recipes[14]},${recipes[15]},${recipes[16]},${recipes[17]},${recipes[18]},${recipes[19]},${recipes[20]})`, function(err, result, fields){
                console.log(result)
                if (err) throw err;
            });
            res.status(200).json({"Message" : "Mealplan Replaced"})
        } else {
            con.query(`INSERT INTO mealplans VALUES ('${user}',${recipes[0]},${recipes[1]},${recipes[2]},${recipes[3]},${recipes[4]},${recipes[5]},${recipes[6]},${recipes[7]},${recipes[8]},${recipes[9]},${recipes[10]},${recipes[11]},${recipes[12]},${recipes[13]},${recipes[14]},${recipes[15]},${recipes[16]},${recipes[17]},${recipes[18]},${recipes[19]},${recipes[20]})`, function(err, result, fields){
                console.log(result)
                if (err) throw err;
            });
            res.status(200).json({"Message" : "Mealplan Inserted"})            
        }   
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