'use strict'

const express = require("express");
const routes = require('../routes');
const path = require('path');
const bodyParse = require('body-parser');

//crear la conexion a la BD
const db = require('../config/db');

// importal el modelo
require('../models/Proyectos');

db.sync()
    .then(()=>console.log('Conectado al servidor'))
    .catch(error=>console.log(error));

//crear una app express
const app = express();

//Donde cargar los archivos estaticos
app.use(express.static('./public'));

//Habilitar Pug
app.set('view engine', 'pug');

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname,'../views'));

//habilitar bodyParcer para leer datos del formulario
app.use(bodyParse.urlencoded({ extended: true }));

app.use('/', routes() );


app.listen(1010);
