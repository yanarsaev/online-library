const BookModel = require("../models/Book.model")

module.exports.bookController = {
    addBook: async (req, res) => {
        try {
            const { name, genre } = req.body
            await BookModel.create({
                name,
                genre
            })
            res.json('Книга добавлена')
        } catch (err) {
            res.json('ERROR:[addBook]:', err)
        }
    },
    updateBook: async (req, res) => {
        try {
            const { name, genre } = req.body
            await BookModel.findByIdAndUpdate(req.params.id, {name, genre})
            res.json('Книга изменена')
        } catch (err) {
            res.json('ERROR:[updateBook]:', err)
        }
    },
    deleteBook: async (req, res) => {
        try {
            await BookModel.findByIdAndDelete(req.params.id)
            res.json('Книга удалена')
        } catch (err) {
            res.json('ERROR:[deleteBook]:', err)
        }
    },
    getAllBooks: async (req, res) => {
        try {
            const data = await BookModel.find().populate('genre')
            res.json(data)
        } catch (err) {
            res.json('ERROR:[getAllBooks]:', err)
        }
    },
    getBook: async (req, res) => {
        try {
            const data = await BookModel.findById(req.params.id).populate('genre')
            res.json(data)
        } catch (err) {
            res.json('ERROR:[getBook]:', err)
        }
    }
}