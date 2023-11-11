const GenreModel = require('../models/Genre.model')

module.exports.genreController = {
    addGenre: async (req, res) => {
        try {
            const { name, description } = req.body
            await GenreModel.create({
                name,
                description
            })
            res.json('Жанр добавлен')
        } catch (err) {
            res.json('ERROR:[addGenre]:', err)
        }
    },
    updateGenre: async (req, res) => {
        try {
            const { name, description } = req.body
            await GenreModel.findByIdAndUpdate(req.params.id, {name, description})
            res.json('Жанр изменен')
        } catch (err) {
            res.json('ERROR:[updateGenre]:', err)
        }
    },
    deleteGenre: async (req, res) => {
        try {
            await GenreModel.findByIdAndDelete(req.params.id)
            res.json('Жанр удален')
        } catch (err) {
            res.json('ERROR:[deleteGenre]:', err)
        }
    },
    getGenres: async (req, res) => {
        try {
            const data = await GenreModel.find()
            res.json(data)
        } catch (err) {
            res.json('ERROR:[getGenres]:', err)
        }
    }
}