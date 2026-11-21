require('dotenv').config();
const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: process.env.DB_HOST || process.env.DB_LOCALHOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'crud_db',
  port: Number(process.env.DB_PORT || 3306)
});

conexion.connect((error) => {
  if (error) {
    console.error('No se pudo conectar a MySQL:', error.message);
    return;
  }
  console.log('Conectado a MySQL');
});

conexion.on('error', (error) => {
  console.error('Error de conexión MySQL:', error.message);
});

module.exports = conexion;
