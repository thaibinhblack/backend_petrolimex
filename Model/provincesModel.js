var mongoose = require('mongoose');  

var ProvincesModel = new mongoose.Schema({
    name: String,
    code: String,
    title: String,
    counties: Array,
    polygonpoints: Array,
    long: String,
    lat: String,
    UUID: String
},{ collection: 'PROVINCES' })
module.exports = mongoose.model('PROVINCES', ProvincesModel)
