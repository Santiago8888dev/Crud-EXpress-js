const express = require('express')
const noteRoute = require('./routes/NoteRouter')
const app = express();

app.use(express.json());

app.use('/api/v1/notes', noteRoute)

app.listen(8000, ()=> {
  
  console.log('servidor corriendo')})