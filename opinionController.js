const Opinion = require('../models/Opinion');

exports.createOpinion = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { comentario, calificacion } = req.body;
    const userId = req.user.id;

    const opinion = await Opinion.create({
      comentario,
      calificacion,
      hotelId,
      userId,
    });

    res.status(201).json(opinion);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la opinión', error });
  }
};

exports.getOpinions = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const opiniones = await Opinion.findAll({ where: { hotelId } });
    res.json(opiniones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener opiniones', error });
  }
};
