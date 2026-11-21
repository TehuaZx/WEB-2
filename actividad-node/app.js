// ============================================================
// ACTIVIDAD: Anatomía de una aplicación básica en Node.js y Express
// Alumno: [TU NOMBRE]
// ============================================================

// require('express'): importa el módulo express instalado con npm.
// Nos devuelve una función que usaremos para crear la aplicación.
const express = require('express');

// express(): ejecuta la función que acabamos de importar y crea
// una instancia de la aplicación (el servidor Express).
// 'app' es el objeto con el que definiremos rutas y middlewares.
const app = express();

// PORT: constante con el número de puerto donde escuchará el servidor.
// El puerto es como la "puerta" por la que entran las peticiones.
const PORT = 3000;

// ------------------------------------------------------------
// MIDDLEWARE GLOBAL
// ------------------------------------------------------------
// Un middleware es una función que se ejecuta ENTRE la petición
// del cliente y la respuesta del servidor. Se ejecuta en CADA
// petición, antes de llegar a las rutas.
//
// Recibe tres parámetros:
//   req  = request  → objeto con la información de la petición
//                     (método, URL, cabeceras, etc.)
//   res  = response → objeto con el que se construye la respuesta
//   next = función que indica "pasa al siguiente middleware o ruta"
//
// Si NO se ejecuta next(), la petición se queda "colgada":
// el navegador se queda esperando y nunca recibe respuesta.
app.use((req, res, next) => {
  console.log(`Método: ${req.method}`);
  console.log(`Ruta solicitada: ${req.url}`);
  next(); // ← imprescindible para continuar
});

// ------------------------------------------------------------
// RUTAS
// ------------------------------------------------------------
// app.get(ruta, callback): define una ruta que responde a peticiones
// HTTP de tipo GET (las que hace el navegador al abrir una URL).
//
// La función flecha (req, res) => { ... } es el callback que se
// ejecuta cuando alguien visita esa ruta. Es una forma corta de
// escribir function(req, res) { ... }.

// Ruta raíz: http://localhost:3000/
app.get('/', (req, res) => {
  // res.send(): envía la respuesta al cliente y cierra la petición.
  res.send('Página principal');
});

// Ruta del alumno: http://localhost:3000/alumno
app.get('/alumno', (req, res) => {
  res.send('Información del alumno');
});

// Ruta "acerca de": http://localhost:3000/acerca
app.get('/acerca', (req, res) => {
  res.send('Aplicación desarrollada con Node.js y Express');
});

// ------------------------------------------------------------
// INICIO DEL SERVIDOR
// ------------------------------------------------------------
// app.listen(PORT, callback): pone al servidor a escuchar en el
// puerto indicado. El callback se ejecuta cuando el servidor
// ya está levantado y listo para recibir peticiones.
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});