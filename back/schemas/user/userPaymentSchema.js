const mongoose = require('mongoose');

var userPaymentSchema = new mongoose.Schema({
    user_id: { type: 'ObjectId', ref: 'users' },
    payment_type: String,
    provider: String,
    account_no: Number,
    expiry: Date,
},{timestamps: true})
let userPayment = mongoose.model('userpayments', userPaymentSchema);
module.exports = userPayment;
