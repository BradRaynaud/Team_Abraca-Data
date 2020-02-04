const express = require('express')
const app = express()
app.use(express.json());
 
app.get('/hello_world', function (req, res) {
    console.log(req);
    res.status(200).json({"message": 'Hello Clay'});
})

app.post("/mongoroute", function(req,res){
    console.log(req.body);
    res.status(200).send("IT WORKED");
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