const UserModel = require('../models/User.model')
const BookModel = require('../models/Book.model')

module.exports.adminController = {
    banUser: async (req, res) => {
        try {
            await UserModel.findByIdAndUpdate(req.params.id, {isBlocked: true, books: []})
            await BookModel.updateMany({clientId: req.params.id}, {clientId: null})
        } catch (err) {
            res.json('ADM-ERROR:[banUser]:', err)
        }
    },
    unbanUser: async (req, res) => {
        try {
            await UserModel.findByIdAndUpdate(req.params.id, {isBlocked: true})
            res.json('Пользователь разблокирован')
        } catch (err) {
            res.json('ADM-ERROR:[unbanUser]:', err)
        }
    }
}