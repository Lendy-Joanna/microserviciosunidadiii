//Nombre del autor: Sandoval Rodríguez Lendy Joanna

var express = require('express');

var ruta = express.Router();

var mongoose = require('mongoose');
require('../models/modelPelicula');
const peli = mongoose.model('Pelicula');

//Agregar

ruta.post('/',(req, res)=>{

    console.log(req.body);
    var newPeli = {
        IdPelicula: req.body.IdPelicula,
        Nombre: req.body.Nombre,
        Genero: req.body.Genero,
        Duracion: req.body.Duracion,
        FechaEstreno: req.body.FechaEstreno,
        Descripcion: req.body.Descripcion,
             
    }
    var pel = new peli(newPeli);

    pel.save().then(() => {
        console.log("Una película ha sido agregada");
        res.send('Una nueva película fue agregada correctamente');
    }).catch((error)=> {
        if(error){
            console.log("Un error al agregar la película");
            throw error;
        }
    });
});

//Eliminar
ruta.delete('/:idpelicula', (req, res) => {
    id= req.params.idpelicula;
    peli.findOneAndRemove({IdPelicula: id }).then(() => {
        res.send("La película se eliminó");
    }).catch((error) => {
        if (error)
            throw error;
    });
});

//Listado
ruta.get('/', (req, res)=>{
    peli.find().then((pelicula)=>{
        res.json(pelicula);
    }).catch((error)=>{
        if(error)
            throw error;
    });

});

//lista uno
ruta.get('/:idpelicula', (req, res)=>{

    let IdPelicula=req.params.idpelicula;
    peli.findOne({IdPelicula}).then((pelicula)=>{
        res.json(pelicula);
    }).catch((error) => {
        if(error)
            throw error; 
    });
});

//modificar
ruta.put('/', (req, res) => {
    id= req.body.IdPelicula;
    peli.findOne({IdPelicula: id}).then((pelicula) => {
        console.log(req.body);
        pelicula.Nombre = req.body.Nombre;
        pelicula.Genero = req.body.Genero;
        pelicula.Descripcion = req.body.Descripcion;

        pelicula.markModified('Nombre');
        pelicula.markModified('Genero');
        pelicula.markModified('Descripcion');

        pelicula.save().then(() => {
            res.send("La película ha sido modificada exitosamente!!");
        }).catch((error) => {
            throw error;
        });
    }).catch((error) => {
        if(error)
            throw error;
    });
});
module.exports = ruta;