const mongoose = require('mongoose');
const Product = require('../schemas/product/productSchema');
const Categories = require('../schemas/product/productCategorySchema');
const Cart = require('../schemas/user/userCartScahema');
const Wishlist = require('../schemas/user/wishlistSchema');
const productAggregations = (offset = 0, limit = 30) => {
    return [
        {
            $project: {
                name: 1,
                inventory: 1,
                brand_id: 1,
                reviews: 1,
                reviewCount: {
                    $size: '$reviews'
                },
                numOfColor: 1,
                price: 1,
                discount_id: 1
            },

        }, {
            $lookup: {
                from: 'brands',
                pipeline: [{
                    $project: {
                        _id: 1,
                        name: 1
                    }
                }],
                localField: 'brand_id',
                foreignField: '_id',
                as: 'brand'
            }
        }, {
            $lookup: {
                from: 'reviews',
                localField: 'reviews',
                foreignField: '_id',
                as: 'reviews'
            }
        }, {
            $lookup: {
                from: 'discounts',
                localField: 'discount_id',
                foreignField: '_id',
                as: 'discounts'
            }
        },{
            $project: {
                name: 1,
                id: 1,
                brand: { $getField: { field: 'name', input: { $first: "$brand" } } },
                image: { $first: { $getField: { field: 'images', input: { $first: "$inventory" } } } },
                numOfColor: 1,
                star: { $cond: { if: { $gt: ['$reviewCount', 0] }, then: { $divide: [{ $sum: '$reviews.star' }, '$reviewCount'] }, else: 0 } },
                price: 1,
                discounts: {
                    $filter: {
                        input: '$discounts',
                        as: 'discount',
                        cond: { $ne: ['$$discount.active', false] }
                    }
                },
                reviewCount: 1,
                color: { $getField: { field: 'color', input: { $first: "$inventory" } } },

            },

        },
        {
            $project: {
                name: 1,
                id: 1,
                brand: 1,
                image: 1,
                numOfColor: 1,
                star: 1,
                price: 1,
                total: { $multiply: [{ $divide: [{ $subtract: [100, { $sum: '$discounts.discount_percent' }] }, 100] }, '$price'] },
                reviewCount: 1,
                color: 1,

            },

        },
        { $sort: { createdAt: -1 } },
        { $skip: offset },
        { $limit: limit },

    ];
};

const getProductList = async (req, res) => {
    var limit = Number(req.query.limit) || 30
    var offset = Number(req.query.page - 1) * limit || 0
    var products = await Product.aggregate([...productAggregations(offset, limit),
    ]);
    let  wishlist = await Wishlist.find({user_id:req.session?.passport?.user},{product_id:1,_id:0});
    wishlist = wishlist.map((e)=>{
        return e.product_id.toString();
    });
    products = products.map((el) => {
        if (wishlist.length==0) {
            el.islike = false;
            return el;
        }
        else if (wishlist.includes(el._id.toString())) {
            el.islike = true
            return el;
        } else {
            el.islike = false;
            return el;
        }

    })
    res.send(products)
}
async function getProductListBysearch(req, res) {
    var limit = Number(req.query.limit) || 30
    var offset = Number(req.query.page - 1) * limit || 0
    const gender = req.params.gender;
    var { color, brand, size, price } = req.query;
    if (size) {
        size = size.split('-');
        size = size.map((e) => {
            return { sizearray: { $in: [e] } }
        })
    } else {
        size = [{}];
    }



    var colors;
    if (color) {
        color = color.split('-');
        colors = { colorarray: { $in: color } }
    } else {
        colors = {}
    };
    if (brand) {
        brand = brand.split('-');
        brand = brand.map((e) => {
            return { brand: e }
        })
    } else {
        brand = [{}]
    };
    let priceL, priceU;
    if (price) {
        priceL = Number(price.split('-')[0]);
        priceU = Number(price.split('-')[1])
    } else {
        priceL = 0;
        priceU = 9999999999;
    }
    if (req.params.search == 'all') {
        a = [{}]
    } else {
        a = req.params.search.split('-');
        a = a.map((e) => {
            return { category: { $in: [e] } }
        })
    }
    var products = await Product.aggregate([{
        $lookup: {
            from: 'productcategories',
            pipeline: [{
                $project: {
                    _id: 0,
                    name: 1
                }
            }],
            localField: 'categories',
            foreignField: '_id',
            as: 'category'
        }
    }, {
        $addFields: {
            category: '$category.name',
            colorarray: {
                $map: {
                    input: '$inventory',
                    as: 'elem',
                    in: { $getField: { field: 'color', input: '$$elem' } }
                }
            },
            numOfColor: { $size: '$inventory' },
        }
    }
        , {
        $match: {
            $and: [
                { category: { $in: [gender] } },
                { $or: a },
                colors
            ]
        }
    },
    {
        $addFields: {
            inventory: {
                $filter: {
                    input: '$inventory',
                    as: 'e',
                    cond: { $in: [{ $getField: { field: 'color', input: '$$e' } }, color ? color : '$colorarray'] }
                }
            }
        }

    }, {
        $addFields: {
            sizearray: {
                $map: {
                    input: '$inventory',
                    as: 'elem',
                    in: {
                        $map: {
                            input: { $getField: { field: 'sizeAndCount', input: '$$elem' } },
                            as: 'elem2',
                            in: {
                                $arrayElemAt: ['$$elem2', 0]
                            }
                        }
                    }
                }
            }
        }
    },
    {
        $addFields: {
            "sizearray": {
                $reduce: {
                    input: '$sizearray',
                    initialValue: [],
                    in: { $concatArrays: ['$$value', '$$this'] }
                }
            }
        }
    }, {
        $match: {
            $or: size
        }
    },
    ...productAggregations(offset, limit),
    {
        $match: {
            $and: [
                { $or: brand },
                { $expr: { $gte: ['$total', priceL] } },
                { $expr: { $lte: ['$total', priceU] } }

            ]
        }
    }
    ]);
    let  wishlist = await Wishlist.find({user_id:req.session?.passport?.user},{product_id:1,_id:0});
    wishlist = wishlist.map((e)=>{
        return e.product_id.toString();
    });
    products = products.map((el) => {
        if (wishlist.length==0) {
            el.islike = false;
            return el;
        }
        else if (wishlist.includes(el._id.toString())) {
            el.islike = true
            return el;
        } else {
            el.islike = false;
            return el;
        }

    })
    res.send(products)
}

async function getProduct(req,res){

  try { let product = await Product.aggregate([
        {
        $match: {
            _id: mongoose.Types.ObjectId(req.params.id)
        },  
    },{
        $lookup: {
            from:'productcategories',
            localField: 'categories',
            foreignField: '_id',
            pipeline:[{
                $project: {
                    _id:0,
                    name: 1
                }
            }],
            as: 'categories'
        }
    },{
        $lookup: {
            from:'discounts',
            localField: 'discount_id',
            foreignField: '_id',
            pipeline:[{
                $project: {
                    _id:0,
                    name: 1
                }
            }],
            as: 'discounts'
        }
    }, 
    {
        $addFields:{
            categories: {
                $map: {
                    input: '$categories',
                    as: 'elem',
                    in: {
                        $getField: { field: 'name', input: '$$elem' }
                    }
                }
            },
            discount: {
                $map: {
                    input: '$discounts',
                    as: 'elem',
                    in: {
                        $getField: { field: 'name', input: '$$elem' }
                    }
                }
            },
            discounts: {
                $filter: {
                    input: '$discounts',
                    as: 'discount',
                    cond: { $ne: ['$$discount.active', false] }
                }
            },
            sizearray: {
                $map: {
                    input: '$inventory',
                    as: 'elem',
                    in: {
                        $map: {
                            input: { $getField: { field: 'sizeAndCount', input: '$$elem' } },
                            as: 'elem2',
                            in: {
                                $arrayElemAt: ['$$elem2', 0]
                            }
                        }
                    }
                }
            }
        }
    },
    {
        $project: {
            total: { $multiply: [{ $divide: [{ $subtract: [100, { $sum: '$discounts.discount_percent' }] }, 100] }, '$price'] },
            price:1,
            name: 1,
            inventory:1,
            desc:1,
            features:1,
            categories:1,
            price:1,
            discount:1,
            "sizearray": {
                $reduce: {
                    input: '$sizearray',
                    initialValue: [],
                    in: { $concatArrays: ['$$value', '$$this'] }
                }
            }
        }
    }
]);
if(product.length ==0) return res.send([]);
let  wishlist = await Wishlist.find({user_id:req.session?.passport?.user},{product_id:1,_id:0});
wishlist = wishlist.map((e)=>{
    return e.product_id.toString();
});
    if (wishlist.length==0) {
        product.islike = false;
        
    }
    else if (wishlist.includes(product[0]?._id.toString())) {
        product[0].islike = true
    } else {
        product[0].islike = false;
    }
    res.send(product[0]);
}catch(e){
    res.send('invalid product id');
}
}

async function addToCart(req, res) {
    let product = req.body;

    product.count = Number(product.count);
    if (!req.isAuthenticated()) {
        let sesProd = req.session.cart ? req.session.cart : [];
        let check = true;
        for (let i in sesProd) {
            if (sesProd[i].product_id === product.product_id && sesProd[i].color === product.color && sesProd[i].size === product.size) {
                check = false;
                req.session.cart[i].count += Number(product.count);
                break;
            }
        }
        if (check) {
            req.session.cart = [...sesProd, product];
        }
        return res.status(201).send();
    }
    product.product_id = mongoose.Types.ObjectId(product.product_id);
    try {
        let docs = await Cart.findOneAndUpdate({ user_id: req.session.passport.user, product_id: product.product_id, size: product.size, color: product.color }, [{
            $addFields: {
                count: { $cond: { if: { $ne: ['$count', null] }, then: { $sum: ['$count', product.count] }, else: product.count } }
            }
        }], { upsert: true, new: true });
        res.status(201).send();
    } catch (e) {
        res.status(400).send()
    }

}

async function getCart(req, res) {
    if (req.isAuthenticated()) {
        const user = mongoose.Types.ObjectId(req.session.passport.user);
        let cart = await Cart.aggregate([
            {
                $match: { user_id: user }
            }, {
                $lookup: {
                    from: 'products',
                    localField: 'product_id',
                    foreignField: '_id',
                    as: 'product',
                    pipeline: [
                        {
                            $project: {
                                _id: 0,
                                name: 1,
                                inventory: 1,
                                price: 1
                            }
                        }
                    ]
                }
            }, {
                $addFields: {
                    inventory: { $getField: { field: 'inventory', input: { $arrayElemAt: ['$product', 0] } } }
                }
            }, {
                $addFields: {
                    inventory: {
                        $filter: {
                            input: '$inventory',
                            as: 'e',
                            cond: { $in: [{ $getField: { field: 'color', input: '$$e' } }, ['$color']] }
                        }
                    },
                    price:{ $getField: { field: 'price', input: { $arrayElemAt: ['$product', 0] } } }
                }
            }, {
                $project: {
                    image: { $first: { $getField: { field: 'images', input: { $first: "$inventory" } } } },
                    color: 1,
                    product_id: 1,
                    size: 1,
                    total: { $multiply: [{ $divide: [{ $subtract: [100, { $sum: '$discounts.discount_percent' }] }, 100] }, '$price'] },
                    count: 1,
                    name:  { $getField: { field: 'name', input: { $arrayElemAt: ['$product', 0] } } }
                }
            }

        ]);
        return res.send(cart);
    }
    let cart = req.session.cart || [];
    async function myfunc(i) {
        if (i >= cart.length) {
            return;
        }
        let color = cart[i].color;
        let id = cart[i].product_id;
        let image = await Product.aggregate([
            {
                $match: {
                    _id: mongoose.Types.ObjectId(id)
                }
            }, {
                $addFields: {
                    inventory: {
                        $filter: {
                            input: '$inventory',
                            as: 'e',
                            cond: { $in: [{ $getField: { field: 'color', input: '$$e' } }, [color]] }
                        }
                    }
                }
            }, {
                $project: {
                    image: { $first: { $getField: { field: 'images', input: { $first: "$inventory" } } } },
                    _id: 0,
                    total: { $multiply: [{ $divide: [{ $subtract: [100, { $sum: '$discounts.discount_percent' }] }, 100] }, '$price'] },
                    name: 1
                }
            }
        ]);
        
        cart[i].image = image[0].image;
        cart[i].total = image[0].total;
        cart[i].name = image[0].name;
        myfunc(i + 1);
    }
    await myfunc(0);

    res.send(cart);
}

async function removeFromCart(req, res) {
    const { product_id, color, size } = req.body;
    if (req.isAuthenticated()) {
        await Cart.findOneAndDelete({ product_id: mongoose.Types.ObjectId(product_id), color, size });
        return res.status(204).send();
    }
    let cart = req.session.cart;
    let cart1 = [];
    cart = cart.forEach((e) => {
        if (e.product_id != product_id || e.color != color || e.size != size) {
            cart1.push(e);
        }

    });
    req.session.cart = cart1;
    return res.status(204).send();

}

async function updateCart(req,res){
    const { product_id, color, size,count } = req.body;
    if(count<1){
        return res.status(400).send();
    }
    if (req.isAuthenticated()) {
        try{
            await Cart.findOneAndUpdate({ product_id: mongoose.Types.ObjectId(product_id), color, size },{count},{new: false });
           return res.status(200).send();
        }catch(e){
            return res.status(400).send();
        }
    }
    let cart = req.session.cart;
    cart = cart.map((e)=>{
        if(e.product_id == product_id && e.color == color && e.size ==size){
             e.count = count;
        }
        return e;
    });
    req.session.cart = cart;
    return res.status(200).send();
}

var isAuthenticated = (req,res,next)=>{
    if(!req.isAuthenticated()){
        return res.status(401).send()
    }
    return next();
}

async function addToWishlist(req,res){
    try {
        const {product_id} = req.body;
        await Wishlist.findOneAndUpdate({
            product_id:mongoose.Types.ObjectId(product_id),
            user_id:mongoose.Types.ObjectId(req.session.passport.user)
        },{},{new:true,upsert:true});
        return res.status(201).send();
    } catch(e){
        console.log(e)
        return res.status(400).send();
    }
    
}

async function getWishList(req,res){

    var wishlist = await Wishlist.aggregate([
        {
            $match: {
                user_id: mongoose.Types.ObjectId(req.session.passport.user)
            }
        },{
            $lookup: {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'product',
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            inventory: 1,
                            name: 1,
                            price:1
                        }
                    }
                ]
            }
        },{
            $addFields: {
                inventory: { $getField: { field: 'inventory', input: { $arrayElemAt: ['$product', 0] } } },
                price:{ $getField: { field: 'price', input: { $arrayElemAt: ['$product', 0] } } }           
            }
        },{
            $project: {
                image: { $first: { $getField: { field: 'images', input: { $first: "$inventory" } } } },
                product_id: 1,
                total: { $multiply: [{ $divide: [{ $subtract: [100, { $sum: '$discounts.discount_percent' }] }, 100] }, '$price'] },
                price: 1,
                name:  { $getField: { field: 'name', input: { $arrayElemAt: ['$product', 0] } } }
            }
        }
    ]);
    return res.send(wishlist);
}

async function deleteFromWishList(req,res){
    const {product_id} = req.params
    await Wishlist.deleteMany({
        product_id:mongoose.Types.ObjectId(product_id),
        user_id: mongoose.Types.ObjectId(req.session.passport.user)
    });
    return res.status(204).send();
}


module.exports = {
    getProductList,
    getProductListBysearch,
    getProduct,
    getCart,
    addToCart,
    removeFromCart,
    updateCart,
    addToWishlist,
    getWishList,
    deleteFromWishList,
    isAuthenticated
}