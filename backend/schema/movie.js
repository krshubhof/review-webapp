const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var movieSchema = new Schema({
    name: String,
    duration: String,
    certification: String,
    genre: String,
    actors :Array

})

module.exports=  mongoose.model('movie',movieSchema)