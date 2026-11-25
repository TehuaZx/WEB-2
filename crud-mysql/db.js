require('dotenv').config();
const mysql = require('mysql2');

// Cambiamos createConnection por createPool
const conexion = mysql.createPool({
  host: process.env.DB_HOST || process.env.DB_LOCALHOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'crud_db',
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true, // Si no hay conexiones libres, espera en lugar de fallar
  connectionLimit: 10,      // Máximo de conexiones simultáneas
  queueLimit: 0             // Sin límite de peticiones en cola
});

// Probamos la conexión inicial
conexion.getConnection((error, conn) => {
  if (error) {
    console.error('No se pudo conectar a MySQL:', error.message);
    return;
  }
  console.log('Conectado a MySQL');
  conn.release(); // Importante: liberar la conexión para que vuelva a estar disponible en el pool
});

module.exports = conexion;