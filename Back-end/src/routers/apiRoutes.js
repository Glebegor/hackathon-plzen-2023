const express = require('express');
const router = express.Router();

// Controllers
const ApiController = require('../controllers/ApiController');

router.use('/api', ApiController);

module.exports = router;
