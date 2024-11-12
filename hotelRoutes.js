const express = require('express');
const { getHotels } = require('../controllers/hotelController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getHotels);

module.exports = router;
