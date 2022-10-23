const mongoose = require('mongoose');

var wishlistSchema = new mongoose.Schema({
    user_id: {type:'ObjectId', ref:'users',require:true},
    product_id: {type: 'ObjectId', ref: 'products',required: true,unique:true}
},{timestamps:true});

var wishlist = mongoose.model('wishlists',wishlistSchema);

module.exports = wishlist;