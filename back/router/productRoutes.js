const express = require('express');
var productController = require('../controllers/product');
var Product = require('../schemas/product/productSchema');
var productRouter = new express.Router();
// var savepr = require('../utilities/savepr')


productRouter.get('/api/products',productController.getProductList);
productRouter.get('/api/product/:id',productController.getProduct);
productRouter.get('/api/products/:gender/:search',productController.getProductListBysearch);
productRouter.get('/api/cart',productController.getCart);
productRouter.post('/api/cart',productController.addToCart);
productRouter.delete('/api/cart',productController.removeFromCart);
productRouter.patch('/api/cart',productController.updateCart);
productRouter.post('/api/wishlist',productController.isAuthenticated,productController.addToWishlist);
productRouter.get('/api/wishlist',productController.isAuthenticated,productController.getWishList);
productRouter.delete('/api/wishlist/:product_id',productController.isAuthenticated,productController.deleteFromWishList)
module.exports = productRouter;
