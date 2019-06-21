var axios = require('axios')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"
const uuid = require('uuid/v4')
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("PLXDB");
//     dbo.createCollection("PROVINCES", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });

// axios.get('https://nominatim.openstreetmap.org/search?q=Cà Mau&format=json&polygon=0&addressdetails=1').then(async (response) => {
//     console.log(response)
// })
// var data = []
axios.get('http://localhost:8080/provinces.json').then(async(response) => {
      
    data = response.data
    data.forEach((element) =>{
            element["UUID"] = uuid()      
    })
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("PLXDB");
    dbo.collection("PROVINCES").insertMany(data, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
        });
    })
    

})
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("PLXDB");
    
//     // dbo.collection("petrolimex").insertOne(myobj, function(err, res) {
//     //   if (err) throw err;
//     //   console.log("1 document inserted");
//     //   db.close();
//     // });
//   });
// console.log(data)
// let data = []


//   });
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("PLXDB");
//     db.collection("petrolimex").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         result.forEach((element) => {
//             console.log(element.GPSLocation)
//         })
//         db.close();
//     });
//   });