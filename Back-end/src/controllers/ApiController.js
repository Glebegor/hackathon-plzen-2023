const express = require('express');

const PacientController = require('./PacientController')

const router = express.Router();

router.use('/patient', PacientController)


module.exports = router;
