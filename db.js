// var axios = require('axios')
// var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://localhost:27017/"
    
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PLXDB');
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));