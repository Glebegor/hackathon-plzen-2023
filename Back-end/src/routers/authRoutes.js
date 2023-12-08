const express = require('express');
const router = express.Router();

// Controllers
const ApiController = require('../controllers/AuthController');

router.use('/auth', ApiController);

module.exports = router;
