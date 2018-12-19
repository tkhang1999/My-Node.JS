const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// the same path can be used if the methods are different

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});


// /admin/add-product =>POST
router.post('/add-product', (req, res, next) => { // handle POST request only and do exact matching of the URL
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;