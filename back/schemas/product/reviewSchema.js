const mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: {type:'ObjectId',ref:"users"},
    star: Number,
    header: String,
    body:String,
    like: [{author: {type:'ObjectId',ref:'users'},count: Number}],
    dislike:[{author: {type:'ObjectId',ref:'users'},count: Number}],
    comment: [{
        author: {type:'ObjectId',ref:'users'},
        body:String,
        created_at: Date,
        modified_at: Date,
    }],
},{timestamps: true});

var review = mongoose.model('reviews',reviewSchema)
module.exports = review;