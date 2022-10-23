const mongoose = require('mongoose');

var productCategorySchema = new mongoose.Schema({
    name: String,
    desc: String,
},{timestamps: true});

var productCategory = mongoose.model('productcategories', productCategorySchema);
module.exports = productCategory;