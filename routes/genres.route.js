const { Router } = require('express')
const {genreController} = require("../controllers/genres.controller");
const router = Router()

router.get('', genreController.getGenres)
router.post('', genreController.addGenre)
router.delete('/:id', genreController.deleteGenre)
router.patch('/:id', genreController.updateGenre)

module.exports = router