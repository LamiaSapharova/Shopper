const mongoose = require('mongoose');

var ShoppingSessionSchema = new mongoose.Schema({
    user_id : {type: 'ObjectId',ref:'users'},
    total: Number,
    created_at:Date,
    modified_at: Date,
});

var ShoppingSession = mongoose.model('shoppingsessions',ShoppingSessionSchema);
module.exports = ShoppingSession;