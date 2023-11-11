const { Router } = require('express')
const {reviewController} = require("../controllers/reviews.controller");
const router = Router()

router.post('', reviewController.addReview)
router.delete('/:id', reviewController.deleteReview)
router.patch('/:id', reviewController.updateReview)

module.exports = router
