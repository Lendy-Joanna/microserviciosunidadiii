// Nombre del autor: Sandoval Rodríguez Lendy Joanna

var express = require('express');

var ruta = express.Router();

var mongoose = require('mongoose');
require('../models/modelComentario');
const comen = mongoose.model('Comentario');

//Agregar

ruta.post('/',(req, res)=>{

    console.log(req.body);
    var newComentario = {
        IdComentario: req.body.IdComentario,
        IdPelicula: req.body.IdPelicula,
        IdUsuario: req.body.IdUsuario,
        Analisis: req.body.Analisis,
        Calificacion: req.body.Calificacion,        
    }
    var com = new comen(newComentario);

    com.save().then(() => {
        console.log("Un comentario ha sido agregado!!");
        res.send('Un nuevo comentario fue agregado correctamente');
    }).catch((error)=> {
        if(error){
            console.log("Un error al agregar el comentario");
            throw error;
        }
    });
});

//Eliminar
ruta.delete('/:idcomentario', (req, res) => {
    id= req.params.idcomentario;
    comen.findOneAndRemove({IdComentario: id }).then(() => {
        res.send("El comentario se eliminó");
    }).catch((error) => {
        if (error)
            throw error;
    });
});

//Listado
ruta.get('/', (req, res)=>{
    comen.find().then((comentario)=>{
        res.json(comentario);
    }).catch((error)=>{
        if(error)
            throw error;
    });

});

//lista uno
ruta.get('/:idcomentario', (req, res)=>{

    let IdComentario=req.params.idcomentario;
    comen.findOne({IdComentario}).then((comentario)=>{
        res.json(comentario);
    }).catch((error) => {
        if(error)
            throw error; 
    });
});

//modificar
ruta.put('/', (req, res) => {
    id= req.body.IdComentario;
    comen.findOne({IdComentario: id}).then((comentario) => {
        console.log(req.body);
        comentario.Analisis = req.body.Analisis;
        comentario.Calificacion = req.body.Calificacion;

        comentario.markModified('Analisis');
        comentario.markModified('Calificacion');

        comentario.save().then(() => {
            res.send("Comentario modificado exitosamente!!");
        }).catch((error) => {
            throw error;
        });
    }).catch((error) => {
        if(error)
            throw error;
    });
});

module.exports = ruta;