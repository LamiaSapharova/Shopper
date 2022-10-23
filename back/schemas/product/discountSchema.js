const mongoose = require('mongoose');

var discountSchema = new mongoose.Schema({
    name: String,
    desc: String,
    discount_percent: Number,
    active: Boolean,
},{timestamps: true});

var discount  = mongoose.model('discounts',discountSchema);
module.exports = discount;