const express = require('express');
const router = express.Router(); // Use the router method of express interface
const mongoose = require('mongoose');

const Contact = require('../models/contact');

// Method to handle GET requests
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /contacts"
    });
});

// Method to handle POST requests for products
router.post('/', (req, res, next) => {
    const contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name, // Request body requires a name parameter for the product
        phoneNumber: req.body.phoneNumber, // Request body requires a price parameter for the product
        email: req.body.email // Request body requires a price parameter for the product
    });
    contact.save().then(result => {
        console.log(result)
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message: "Handling POST requests to /products",
        createdContact: contact // Pass the product object as a part of create contact as response parameter
    });
});

// :contactName, passing variable called contact name in the URL
// This will get details of a particular contact
router.get('/search/:contactName', (req, res, next) => {
    const name = req.params.contactName;
    Contact.find({name: name})
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

module.exports = router;