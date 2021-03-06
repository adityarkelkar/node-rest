const express = require('express'); // Require the express script module
const app = express(); // Create a constant app
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // require the mongoose package for mongodb related operations

// Required for 
const morgan = require('morgan');

// Handle the routes mentioned in the products.js file
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const contactRoutes = require('./api/routes/contact');

// mongoose.connect('mongodb+srv://'+process.env.MONGO_USER+':'+process.env.MONGO_PASSWD+'@noderest-klzs4.mongodb.net/test?retryWrites=true', {
//     useMongoClient: true
// });

mongoose.connect('mongodb://localhost/products', {
    useMongoClient: true
});

// Middleware. Functions that have access to the req, res and next objects
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); // true allows to parse extended bodies with rich text 
app.use(bodyParser.json()); // Extract json data which is easily readable

// Handle CORS, append headers to any response to be sent before we reach the routes
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Grant origin access to all incoming requests
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    ); // Define which kind of headers we want to accept
    if(req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); // Methods we want our API to support
        return res.status(200).json();
    }
    next();
});

// Use these middleware to handle all requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/contact', contactRoutes);

// Error Handling. Handle every request that hits this web app
app.use((req, res, next) => {
    const error = new Error("Page not found"); // Create a error constant, object available by default
    error.status = 404; // Set the status code of the error
    next(error); // Forward the request with the error
});

// Middleware to handle all kinds of errors thrown from anywhere within the application
app.use((error, req, res, next) => {
    res.status(error.status || 500); // Status code returned by the error or default 500
    res.json({
        error: {
            message: error.message
        }
    })
})

// Export this module so that it can be used in other modules
module.exports = app;