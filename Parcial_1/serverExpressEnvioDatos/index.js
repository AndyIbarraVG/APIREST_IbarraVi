const express = require('express');
const morgan = require('morgan');
const app = express();

//Funcion de middleware de un tercero
app.use(morgan('tiny'))
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false}));

//Recibiendo parametros en la caadena de consulta
app.get("/alumnos", (req,res, next) => {
    console.log(req.query);
    res.send("Contestando una peticion Get en la ruta /alumnos");
});

//Recibiendo parametros como parte de la ruta
app.get("/maestros/:carrera", (req,res, next) => {
    console.log(req.params,carrera)
    res.send("Contestando una peticion Get en la ruta /maestros/:carrera");
})

//Recibiendo parametros como Json en el body
app.get("/administrativos", (req,res, next) => {
    //console.log(req.body.id);
    //console.log(req.body.nombre);
    for(const campo in req.body){
        console.log(req.body[campo]);
    }
    res.send("Contestando una peticion Get en la ruta /administrativos");
})

app.get("/prefectos", (req,res, next) => {
    console.log(req.body);
    res.send("Contestando una peticion Get en la ruta /prefectos");
})

app.listen(3000, () =>{
    console.log("Se ha iniciado el servidor en el puerto 3000")
})