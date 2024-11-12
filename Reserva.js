const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Reserva = sequelize.define('Reserva', {
  id_reserva: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fechaInicio: { type: DataTypes.DATE, allowNull: false },
  fechaFin: { type: DataTypes.DATE, allowNull: false },
  hotelId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Reserva;
