const Reserva = require('../models/Reserva');

exports.createReservation = async (req, res) => {
  try {
    const { hotelId, fechaInicio, fechaFin } = req.body;
    const userId = req.user.id;

    const reserva = await Reserva.create({
      hotelId,
      userId,
      fechaInicio,
      fechaFin,
    });

    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la reserva', error });
  }
};

exports.getReservations = async (req, res) => {
  try {
    const userId = req.user.id;
    const reservas = await Reserva.findAll({ where: { userId } });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener reservas', error });
  }
};
