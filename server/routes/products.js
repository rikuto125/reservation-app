const express = require('express')
const Product = require('../model/product')
const router = express.Router()

// 全プロダクト情報を取得
router.get('', function(req,res){
    Product.find({}, function(err, foundProducts){
        return res.json(foundProducts)
    })
})

// プロダクトIDでプロダクト情報を取得
router.get('/:productId', function(req, res) {
    const productId = req.params.productId;

    Product.findById(productId, function(err, foundProduct) {
        if(err) {
            console.log(err)
            return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found'}]})
        }
        console.log('hello')
        res.json(foundProduct);
    });
});

module.exports = router
