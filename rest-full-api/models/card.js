const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/v1database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const CardSchema = new Schema({
    name: String,
    price: String,
    ava: String
}, {
    collection: 'card'
});

const CardModels = mongoose.model('card', CardSchema)

module.exports = CardModels