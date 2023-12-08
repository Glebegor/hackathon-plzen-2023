const express = require('express');

const PacientController = require('./PacientController')
const NotesController = require('./NoteController')
const EmojiController = require('./EmojiController')
const ReasonController = require('./ReasonController')

const router = express.Router();

router.use('/patient', PacientController)
router.use('/notes', NotesController)
router.use('/emoji', EmojiController)
router.use('/reason', ReasonController)


module.exports = router;
