const {notes} = require('../models/note.js')

exports.getNotes =((req, res) =>{
  res.status(200).json({
    message : 'succesfull',
    total : notes.length,
    data : notes
  })
})