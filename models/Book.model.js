const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'genres'
    },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        default: null
    }
})

module.exports = mongoose.model('books', bookSchema)