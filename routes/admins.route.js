const { Router } = require('express')
const {bookController} = require("../controllers/books.controller");
const {genreController} = require("../controllers/genres.controller");
const {userController} = require("../controllers/users.controller");
const {adminController} = require("../controllers/admin.controller");
const router = Router()

router.post('/books', bookController.addBook)
router.patch('/books/:id', bookController.updateBook)
router.delete('/books/:id', bookController.deleteBook)

router.post('/genres', genreController.addGenre)
router.delete('/genres/:id', genreController.deleteGenre)
router.patch('/genres/:id', genreController.updateGenre)

router.post('/users', userController.addUser)
router.delete('/users/:id', userController.deleteUser)
router.get('/users/ban/:id', adminController.banUser)
router.get('/users/unban/:id', adminController.unbanUser)

module.exports = router