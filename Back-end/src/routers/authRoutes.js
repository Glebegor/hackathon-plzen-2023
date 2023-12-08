const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');

router.use('/v1', AuthController);

module.exports = router;
