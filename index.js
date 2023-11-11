const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use('/genres', require('./routes/genres.route'))
app.use('/books', require('./routes/books.route'))
app.use('/users', require('./routes/users.route'))
app.use('/reviews', require('./routes/reviews.route'))
app.use('/admin', require('./routes/admins.route'))

mongoose.connect('mongodb+srv://yanarsaev:eBaRuSm4gmSKDZ2u@cluster0.2gs1s7k.mongodb.net/online-library', {
})
    .then(() => console.log('MongoDb подключен'))
    .catch(() => console.log('MongoDb НЕ подключен'))

app.listen(3000, () => console.log('Server has been started'))
