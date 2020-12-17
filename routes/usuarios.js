//Nombre del autor: Sandoval Rodríguez Lendy Joanna

var express = require('express');

var ruta = express.Router();

var mongoose = require('mongoose');
require('../models/modelUsuario');
const usua = mongoose.model('Usuario');

//Agregar

ruta.post('/',(req, res)=>{

    console.log(req.body);
    var newUsuario = {
        IdUsuario: req.body.IdUsuario,        
        NameUser: req.body.NameUser,
        Nombre: req.body.Nombre,
        Apellidos: req.body.Apellidos,
        Edad: req.body.Edad,        
    }
    var us = new usua(newUsuario);

    us.save().then(() => {
        console.log("Un Usuario fue agregado!!");
        res.send('Un nuevo usuario ha sido agregado correctamente');
    }).catch((error)=> {
        if(error){
            console.log("Un error al agregar el Usuario");
            throw error;
        }
    });
});

//Eliminar
ruta.delete('/:idusuario', (req, res) => {
    id= req.params.idusuario;
    usua.findOneAndRemove({IdUsuario: id }).then(() => {
        res.send("El usuario ha sido eliminado");
    }).catch((error) => {
        if (error)
            throw error;
    });
});

//Listado
ruta.get('/', (req, res)=>{
    usua.find().then((usuario)=>{
        res.json(usuario);
    }).catch((error)=>{
        if(error)
            throw error;
    });

});


//lista uno
ruta.get('/:idusuario', (req, res)=>{

    let IdUsuario=req.params.idusuario;
    usua.findOne({IdUsuario}).then((usuario)=>{
        res.json(usuario);
    }).catch((error) => {
        if(error)
            throw error; 
    });
});

//modificar
ruta.put('/', (req, res) => {
    id= req.body.IdUsuario;
    usua.findOne({IdUsuario: id}).then((usuario) => {
        console.log(req.body);
        usuario.Nombre = req.body.Nombre;
        usuario.Apellidos = req.body.Apellidos;

        usuario.markModified('Nombre');
        usuario.markModified('Apellidos');

        usuario.save().then(() => {
            res.send("Usuario modificado correctamente");
        }).catch((error) => {
            throw error;
        });
    }).catch((error) => {
        if(error)
            throw error;
    });
});

module.exports = ruta;