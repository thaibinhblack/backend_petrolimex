    
var mongoose = require('mongoose');  
var PetrolimexSchema = new mongoose.Schema({  
    Title: String,
    OwnedBy: String,
    Address: String,
    County: String,
    District: String,
    Province: String,
    GPSLocation: String,
    Long: String,
    Lat: String,
    Phone: String,
    Email: String,
    LeaderName: String,
    LeaderMobile: String,
    WorkingTimes: String,
    Goods:String,
    Services: String,
    OilDispenser:   Number,
    PumpsForAutos: String,
    StorageCapacity: String,
    SelftService: String,
    CardAccepts: String,
    StationAddress: String,
    UUID: String,
}, { collection: 'petrolimex' })

module.exports = mongoose.model('petrolimex', PetrolimexSchema)
