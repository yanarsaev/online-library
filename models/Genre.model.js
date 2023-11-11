const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String
})

module.exports = mongoose.model('genres', genreSchema)