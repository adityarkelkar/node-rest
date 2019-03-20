const express = require('express');
const router = express.Router(); // Use the router method of express interface

// Method to handle GET requests
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /products"
    });
});

// Method to handle POST requests for products
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name, // Request body requires a name parameter for the product
        price: req.body.price // Request body requires a price parameter for the product
    }
    res.status(200).json({
        message: "Handling POST requests to /products",
        createdProduct: product // Pass the product object as a part of create product as response parameter
    });
});

// :productID, passing variable called productID in the URL
// This will get details of a particular product
router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if(id == 'special') {
        res.status(100).json({
            message: "You discovered a special. NO value here",
            id: id
        });
    } else {
        res.status(200).json({
            message: "You passed an ID. Will get details later",
            id: id
        });
    }
})

module.exports = router;