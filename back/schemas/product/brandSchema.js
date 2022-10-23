const mongoose = require('mongoose');

var brandSchema = new mongoose.Schema({
    name: String,
    logo:String,
    country: String,
},{timestamps: true});
var brand = mongoose.model('brands',brandSchema);
module.exports = brand;