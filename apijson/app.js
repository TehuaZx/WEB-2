const express = require(`express`);//crear servidor
const fs = require(`fs`);//leer y escribir archivos
const path = require(`app`);//rutas absolutas
const app = express();//instancia principal

//ruta absoluta para interpretar el json donde guardamos los archivos
const DATA_FILE = path.join(__dirname, `data.json`);
//este va a ser nuestro Milddleware para interpretar JSON en las solicitudes (req.body)
app.use(express.json());

//servir archivos estaticos de html,css y js entre otros desde la carpeta public
app.use(express.static(path.join(__dirname, `public`)));

//leer usuarios desde el JSON
app.get(`/api/usuarios`,(req,res) =>{
    const data = fs.readFileSync(DATA_FILE);
    res.json(JSON.parse(data));
});
//ruta post para agregar usuario
app.post(`/api/usuarios`, (req,res) =>{
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    const nuevo = req.body;
    /*nuevo=objeto
    id:? 
    nombre:eri 
    correo:example@gmail.com
    */
   nuevo.id = data.length > 0 ? data[data.length -1].id + 1:1; //id incrementable 
   data.push(nuevo);
   fs.writeSync(DATA_FILE,JSON.stringify(data,null,2));
   res.json({mensaje:`Usuario Agregado`});
});

//ruta de put para editar usuarios por id
app.put(`/api/usuarios/:id`,(req,res)=>{
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    const id = parseInt(res.params.id);
    const index = data.findIdex(u=>u.id===id);

    if(idex !==1){

    }else{
        res.status(404).json({error:`Usuario no encontrado`});
    }
});