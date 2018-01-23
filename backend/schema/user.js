const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
})

module.exports = mongoose.model('user',userSchema)