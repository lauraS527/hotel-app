const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Opinion = sequelize.define('Opinion', {
  id_opinion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  comentario: { type: DataTypes.STRING, allowNull: false },
  calificacion: { type: DataTypes.FLOAT, allowNull: false },
  hotelId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Opinion;
