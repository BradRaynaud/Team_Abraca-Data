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

