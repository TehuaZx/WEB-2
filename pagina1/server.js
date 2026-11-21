//importar express
const express = require('express');
//crear una instancia de express
const app = express();
//definicion de puerto
const port = 3009;

app.use(express.static('Public'));

//ruta principal que nos ayuda en la pagina web de inicio
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Public/index.html');
});
//nueva ruta que sirve a la pagina de datos de nuestro sitio
app.get('/datos', (req, res) => {
    res.sendFile(__dirname + '/Public/datos.html');
});
//ruta hacia los servivios
app.get('/servicios', (req, res) => {
    res.sendFile(__dirname + '/Public/servicios.html');
});
//ruta hacia nuestro contacto
app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + '/Public/contacto.html');
});
//ruta para saber de nosotros
app.get('/sobre_nosotros', (req, res) => {
    res.sendFile(__dirname + '/Public/sobre_nosotros.html');
});
//ruta de formulario
app.get('/cuenta', (req, res) => {
    res.sendFile(__dirname + '/Public/cuenta.html');
});
//iniciar el servidor
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});

