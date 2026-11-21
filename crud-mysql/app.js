require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// importar el archivo de rutas donde se manejan las operaciones de usuarios
const userRoutes = require('./routes/user');

// configurar motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware para leer los datos enviados desde formularios HTML con POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});