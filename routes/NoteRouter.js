const express = require('express')
const notesController = require('../controllers/NoteController.js')

const route = express.Router()

route.route('/').get(notesController.getNotes)

module.exports = route