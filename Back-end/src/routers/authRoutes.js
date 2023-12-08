const express = require('express');
const router = express.Router();

// Controllers
const ApiController = require('../controllers/AuthController');

router.use('', ApiController);

module.exports = router;
