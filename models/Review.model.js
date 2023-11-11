const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: String,
    bookId: {
        type: Schema.Types.ObjectId,
        ref: 'books'
    },
})

module.exports = mongoose.model('reviews', reviewSchema)