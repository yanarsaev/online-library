const UserModel = require('../models/User.model');
const BookModel = require("../models/Book.model")

module.exports.userController = {
    addUser: async (req, res) => {
        try {
            const { name, books } = req.body
            await UserModel.create({
                name,
                books
            })
            res.json('Аккаунт создан')
        } catch (err) {
            res.json('ERROR:[addUser]:', err)
        }
    },
    deleteUser: async (req, res) => {
        try {
            await UserModel.findByIdAndDelete(req.params.id)
            res.json('Аккаунт удален')
        } catch (err) {
            res.json('ERROR:[deleteUser]:', err)
        }
    },
    getUser: async (req, res) => {
        try {
            const data = await UserModel.findById(req.params.id)
            res.json(data)
        } catch (err) {
            res.json('ERROR:[getUser]:', err)
        }
    },

    takeBook: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            const book = await BookModel.findById(req.body.bookId)

            if(user.isBlocked) {
                res.json('Вы не можете арендовать книгу, так как вы заблокированы!')
            } else if (user.books.length >= 3) {
                res.json('Нельзя брать больше 3х книг!')
            } else if (book.clientId !== null) {
                res.json('Книга уже арендована')
            } else {
                await BookModel.findByIdAndUpdate(req.body.bookId, {clientId: req.params.id})
                await UserModel.findByIdAndUpdate(req.params.id, {
                    $addToSet: {
                        books: req.body.bookId
                    }
                })
                res.json('Вы успешно взяли книгу в аренду')
            }
        }
         catch (err) {
            res.json('ERROR:[takeBook]:', err)
        }
    },
    returnBook: async  (req, res) => {
        try {
            await BookModel.findByIdAndUpdate(req.body.bookId, {
                clientId: null
            })
            await UserModel.findByIdAndUpdate(req.params.id, {
                $pull: {
                    books: req.body.bookId
                }
            })
            res.json('Вы успешно сдали книгу')
        } catch (err) {
            res.json('ERROR:[returnBook]:', err)
        }
    }
}
