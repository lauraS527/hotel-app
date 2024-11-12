const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createOpinion, getOpinions } = require('../controllers/opinionController');

const router = express.Router();

// Crear una nueva opinión
router.post('/:hotelId', authMiddleware, createOpinion);

// Obtener opiniones de un hotel específico
router.get('/:hotelId', getOpinions);

module.exports = router;
