const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/v1database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const AccountSchema = new Schema({
    username: String,
    password: String
}, {
    collection: 'account'
});

const AccountModels = mongoose.model('account', AccountSchema)

module.exports = AccountModels