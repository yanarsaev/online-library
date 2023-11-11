const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'books'
    }]
})

module.exports = mongoose.model('users', userSchema)