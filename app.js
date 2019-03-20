const express = require('express'); // Require the express script module
const app = express(); // Create a constant app
const bodyParser = require('body-parser');

// Required for 
const morgan = require('morgan');

// Handle the routes mentioned in the products.js file
const productRoutes = require('./api/routes/products');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use this middleware to handle all requests going to /products from the route defined above
app.use('/products', productRoutes);

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