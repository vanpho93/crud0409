const mongoose = require('mongoose');

const uri = 'mongodb://localhost/node0409';

mongoose.connect(uri, { useMongoClient: true });
mongoose.Promise = global.Promise;

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    image: { type: String },
    desc: { type: String },
    video: { type: String }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
