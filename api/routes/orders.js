const express = require('express');
const router = express.Router(); // Use the router method of express interface

// Method to handle GET requests
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /orders"
    });
});

// Method to handle POST requests for orders
router.post('/', (req, res, next) => {
    const order = {
        orderId: req.body.orderId, // Request body requires a id parameter for the order
        quantity: req.body.quantity // Request body requires a quantity parameter for the order
    }
    res.status(200).json({
        message: "Handling POST requests to /orders",
        createdOrder: order // Pass the order object as a part of create order as response parameter
    });
});

// :orderID, passing variable called orderID in the URL
// This will get details of a particular product
router.get('/:orderID', (req, res, next) => {
    const id = req.params.orderID;
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