const mongoose = require('mongoose');


var productSchema = new mongoose.Schema({
    name: String,
    desc: String,
    features:Object,
    SKU: String,
    categories:[{type:'ObjectId',ref:'productcategories'}],
    inventory:[{
        color: String,
        images: [String],
        sizeAndCount:[[String,{type:Number,default:10}]],
    }],
    brand_id:{type:'ObjectId',ref:'brands'},
    price: Number,
    discount_id: [{type:'ObjectId',ref:'discounts', default: ''}],
    reviews:[{type:'ObjectId',ref:'reviews'}],
},{timestamps: true})
Product = mongoose.model('products', productSchema)
module.exports = Product