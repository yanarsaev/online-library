const ReviewModel = require('../models/Review.model')

module.exports.reviewController = {
    addReview: async (req, res) => {
        try{
            const {clientId, text, bookId} = req.body
            await ReviewModel.create({
                clientId,
                text,
                bookId
            })
            res.json('Отзыв опубликован')
        } catch (err) {
            res.json('ERROR:[addReview]:', err)
        }
    },
    deleteReview: async (req, res) => {
        try {
            await ReviewModel.findByIdAndDelete(req.params.id)
            res.json('Отзыв удален')
        } catch (err) {
            res.json('ERROR:[deleteReview]:', err)
        }
    },
    updateReview: async (req, res) => {
        try {
            const {clientId, text, bookId} = req.body
            await ReviewModel.findByIdAndUpdate(req.params.id, {clientId, text, bookId})
            res.json('Отзыв изменен')
        } catch (err) {
            res.json('ERROR:[updateReview]:', err)
        }
    }
}