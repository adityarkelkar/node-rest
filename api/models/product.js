const mongoose = require('mongoose'); // including the mongoose package

// Schema that will be used to save data to mongo db
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // MongoDB generated unique ID
    name: String, // Name of the product
    price: Number, // Price of the product
});

module.exports = mongoose.model('Product', productSchema);