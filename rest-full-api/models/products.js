const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/v1database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const ProductsSchema = new Schema({
    name: String,
    species: String,
    price: String,
    ava: String
}, {
    collection: 'products'
});

const ProductsModels = mongoose.model('products', ProductsSchema)

module.exports = ProductsModels