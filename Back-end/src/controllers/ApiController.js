const express = require('express');

const PacientController = require('./PacientController')
const NotesController = require('./NoteController')
const EmojiController = require('./EmojiController')

const router = express.Router();

router.use('/patient', PacientController)
router.use('/notes', NotesController)
router.use('/emoji', EmojiController)


module.exports = router;
