var express = require('express');
var ruta = express.Router();

//Se crea un objeto del modelo
var mongoose = require('mongoose');
require('../models/modelEstudianteCurso');
const EstudianteCurso = mongoose.model('EstudianteCurso');

//ruta para invocar la operación
ruta.post('/', (req, res) => { 
    //Extrae los datos del body enviados mediante el request
    console.log(req.body);
    var newInscripcion = {
        NumeroControl: req.body.NumeroControl,
        CursoNo: req.body.CursoNo,
        Puntuacion: req.body.Puntuacion,
        Terminado: req.body.Terminado
    }

    //Se crea un objeto con los datos
    var matriculacion = new EstudianteCurso(newInscripcion);

    matriculacion.save().then(() => {
        res.send("Se ha agregado una inscripción con éxito");
    }).catch((err) => {
        if(err)
        throw err;
    });   
});

module.exports = ruta;