const mongoose = require('mongoose')

var Schema = mongoose.Schema

var reviewSchema = new Schema({
    userId:Schema.Types.ObjectId,
    movieId: Schema.Types.ObjectId,
    review:String
})

module.exports = mongoose.model('review',reviewSchema)
