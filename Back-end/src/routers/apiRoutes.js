const express = require('express');
const router = express.Router();

// Controllers
const ApiController = require('../controllers/ApiController');

router.use('/v1', ApiController);

module.exports = router;
