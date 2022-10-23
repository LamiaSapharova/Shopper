const mongoose = require('mongoose');

var paymentDetailSchema = new mongoose.Schema({
    order_id: Number,
    amount: Number,
    provider: String,
    status: String,
    created_at: Date,
    modified_at: Date,
})
var paymentDetail = mongoose.model('payment_details',paymentDetailSchema);
module.exports = paymentDetail