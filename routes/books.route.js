const { Router } = require('express')
const {bookController} = require("../controllers/books.controller");
const router = Router()

router.get('', bookController.getAllBooks)
router.get('/:id', bookController.getBook)
router.post('', bookController.addBook)
router.patch('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router