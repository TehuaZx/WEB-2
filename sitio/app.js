const express = require ("express");
const path = require("path");
// craer instancia
const app = express();

const port= 3006;

//ruta para la pgina
app.get(`/`,(req,res)=> {
    res.sendFile(path.join(__dirname,`index.html`));

});
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
});