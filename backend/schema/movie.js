const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var movieSchema = new Schema({
    name:String,
    duration:String,
    certification:String,
    genre:String

})

module.exports=  mongoose.model('movie',movieSchema)