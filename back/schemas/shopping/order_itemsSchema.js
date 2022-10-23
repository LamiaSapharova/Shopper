const mongoose = require('mongoose');

var orderItemSchema = new mongoose.Schema({
    order_id:{type:'ObjectId',ref:'order_details'},
    products: [{product_id: {type:'ObjectId',ref:'products'},
    quantity: Number}],
    created_at: Date,
    modified_at: Date,
});

var orderItems = mongoose.model('order_items',orderItemSchema);
module.exports = orderItems;