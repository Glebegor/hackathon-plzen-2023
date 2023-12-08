const express = require('express');

const PacientController = require('./PacientController')
const NotesController = require('./NoteController')

const router = express.Router();

router.use('/patient', PacientController)
router.use('/notes', NotesController)


module.exports = router;
