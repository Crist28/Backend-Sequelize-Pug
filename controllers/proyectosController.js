'use strict'
const Proyectos = require('../models/Proyectos')

exports.proyectosHome = async(req, res) => {
    const proyectos = await Proyectos.findAll();
    res.render('index',{
        nombrePagina:'Proyectos',
        proyectos
    });
};

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto',{
        nombrePagina:'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = async(req, res) => {
    //enviar a la consola lo que el usuario escriba
    //console.log(req.body);

    //validar que haya algo en el body
    const { nombre } = req.body;

    let errores = [];

    if(!nombre){
        errores.push({'texto':'Agregar un nombre al proyecto'});
    }
    if(errores.length > 0){
        res.render('nuevoProyecto',{
            nombrePagina: 'Nuevo proyecto',
            errores
        });
    }else{
        //no hay errores
        //Insertar en la base de datos
        Proyectos.create({ nombre })
            .then(()=> console.log('Insertado correctamente'))
            .catch(error => console.log(error));
    }
}

