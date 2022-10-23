const mongoose = require('mongoose');

let Cart = new mongoose.Schema({
    user_id: { type: 'ObjectId', ref: 'users', required: true },
    product_id: { type: 'ObjectId', ref: 'products' },
    color: String,
    size: String,
    count: Number
}, { timestamps: true });

let userCart = mongoose.model('carts', Cart);

module.exports = userCart;