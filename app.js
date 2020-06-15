require('dotenv').config({path:__dirname + '/.env'});
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Input = require('./models/input');

const uri = "mongodb+srv://taanguyen:" + process.env['DB_PASS'] + "@webappcluster-ib7wk.mongodb.net/" + process.env['DB_NAME']   + "?retryWrites=true&w=majority";
// connect to mongodb atlas
mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', ()=>{
    console.log("connected to mongo!");
})
mongoose.connection.on('error', ()=>{
    console.log("ERROR");
});

// set port
app.listen(3000, () => console.log("you are listening to port 3000"));
app.use(express.static('public'));
// process user input as plain text
app.use(express.text());

// users input a quote, hit submit, update db
app.post("/", function(req, res){
    // save user quote 
    const userQuote = new Input({
        _id: new mongoose.Types.ObjectId(),
        quote: req.body
    });
    userQuote.save().then(userQuoteResponse =>{
        console.log(userQuoteResponse);
    }).catch(err=>{
        console.log("error: user quote not saved");
    });
    // send back a random quote
    Input.countDocuments().exec(function (err, count) {
    var random = Math.floor(Math.random() * count);
    // fetch quote
    Input.findOne().skip(random).exec(
      function (err, randomQuote) {
        res.json(randomQuote);
      });
    });
});

