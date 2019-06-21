var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

router.get('/', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("PLXDB");
        dbo.collection("PROVINCES").find({}).toArray(function(err, result) {
            if (err) throw err;
            if (err) return res.status(500).send("There was a problem finding the users.");
                res.status(200).send(result);
            db.close();
        });
      });
    
});
router.put('/', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("PLXDB");
        var myquery = req.body.name
        var newvalues = { $set: {long: req.body.long, lat: req.body.lat } };
        dbo.collection("PROVINCES").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            if (err) return res.status(500).send("There was a problem finding the users.");
                res.status(200).send('updated!');
            db.close();
        });
      });
    
});


// UPDATES A SINGLE USER IN THE DATABASE
router.put('/', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("PLXDB");
        var myquery = { name: req.body.name };
        var newvalues = { $set: req.body };
        dbo.collection("PROVINCES").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          res.status(200).send('1 document updated');
        
          db.close();
        });
      });
});


module.exports = router;