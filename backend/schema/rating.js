const mongoose = require('mongoose')

var Schema = mongoose.Schema

var ratingSchema = new Schema({
    userId:Schema.Types.ObjectId,
    movieId: Schema.Types.ObjectId,
    ratings: String
})

module.exports = mongoose.model('ratings',ratingSchema)