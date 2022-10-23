const mongoose = require('mongoose');

var orderDetailSchema = new mongoose.Schema({
    user_id:{type:'ObjectId',ref:'users'},
    total: Number,
    payment_id:{type:'ObjectId',ref:'payment_details'},
    created_at: Date,
    modified_at: Date,
});

var orderDetail = mongoose.model('order_details',orderDetailSchema);
module.exports = orderDetail;