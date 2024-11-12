const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createReservation, getReservations } = require('../controllers/reservaController');

const router = express.Router();

// Crear una nueva reserva
router.post('/', authMiddleware, createReservation);

// Obtener todas las reservas de un usuario autenticado
router.get('/', authMiddleware, getReservations);

module.exports = router;
