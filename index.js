const express = require('express');
const sequelize = require('./config/db');
const User = require('./models/User');
const Hotel = require('./models/Hotel');
const userRoutes = require('./routes/userRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const opinionRoutes = require('./routes/opinionRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/hoteles', hotelRoutes);
app.use('/api/opiniones', opinionRoutes);
app.use('/api/reservas', reservaRoutes);


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'laura1234',
  database: 'hotel_db',
});

app.get('/hoteles', (req, res) => {
  const searchQuery = req.query.search || '';
  const sql = `
    SELECT * FROM Hoteles 
    WHERE nombre LIKE ? OR ubicacion LIKE ? 
    ORDER BY precio_noche ASC;
  `;
  db.query(sql, [`%${searchQuery}%`, `%${searchQuery}%`], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

sequelize.sync()
  .then(() => app.listen(5000, () => console.log('Servidor en el puerto 5000')))
  .catch((error) => console.log('Error al sincronizar la base de datos:', error));
