const express = require('express');
const router = express.Router();

const HomeRoutes = require('../controllers/HomeController');

router.use('', HomeRoutes);

module.exports = router;
