const { Router } = require('express')
const { userController } = require("../controllers/users.controller");
const router = Router()

router.get('/:id', userController.getUser)
router.post('', userController.addUser)
router.delete('/:id', userController.deleteUser)
router.patch('/:id/take-book', userController.takeBook)
router.patch('/:id/return-book', userController.returnBook)

module.exports = router