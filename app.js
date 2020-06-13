const express = require('express');
const app = express();
app.listen(3000, () => console.log("you are listening to port 3000"));
app.use(express.static('public'));
app.use(express.text());
// connect to a database
// handle http requests 
// users input a quote, hit submit, update db
app.post("/", function(req, res){
    // update db 

    console.log("i have a request!");
    console.log(req.body);
    // query db for a quote to send back
    const quoteResponse = "Thank you for your quote";
    res.send(quoteResponse);
    
});

