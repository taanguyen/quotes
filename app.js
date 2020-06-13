const express = require('express');
const Datastore = require('nedb');
const { response } = require('express');

const app = express();
const db = new Datastore('quotes.db');
db.loadDatabase();

app.listen(3000, () => console.log("you are listening to port 3000"));
app.use(express.static('public'));
app.use(express.text());

// users input a quote, hit submit, update db
app.post("/", function(req, res){
    // update db 
    db.insert({quote: req.body});
    // query db for a quote to send back
    db.find({}, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

