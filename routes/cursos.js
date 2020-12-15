var express = require('express');
var ruta = express.Router();

//Conectando con la base de datos
var mongoose = require('mongoose');
require('../models/modelCurso');
const Curso = mongoose.model('Curso');//Referencia al modelo


//Encontrar un registro en específico de acuerdo al número de curso
ruta.get('/:cursoNo', (req, res) => {
    
    Curso.findOne({ cursoNo: req.params.cursoNo }).then((curso) => {
        res.json(curso); //solo registra un registro
    }).catch((error) => {
        if(error)
        throw error;
    });
});

ruta.get('/', (req, res)=>{
    curso.find().then((cursos)=>{
        res.json(cursos);
    }).catch((error)=>{
        if(error)
            throw error;
    });

});
ruta.delete('/:cursono', (req, res) => {
    cursono= req.params.cursono;
    curso.findOneAndRemove({CursoNo: cursono }).then(() => {
        res.send("El curso se elimino");
    }).catch((error) => {
        if (error)
            throw error;
    });
});

ruta.post('/',(req, res)=>{

    console.log(req.body);
    var newCurso = {
        CursoNo: req.body.CursoNo,
        Cuatrimestre: req.body.Cuatrimestre,
        FechaInicio: req.body.FechaInicio,
        FechaFin: req.body.FechaFin,
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion
        
    }
    var cur = new curso(newCurso);

    cur.save().then(() => {
        console.log("Un curso fue agregado!!");
        res.send('Un nuevo curso agregado correctamente');
    }).catch((error)=> {
        if(error){
            console.log("Un error al agregar el curso");
            throw error;
        }
    });
});

ruta.put('/', (req, res) => {
    curso.findOne({CursoNo: req.body.CursoNo}).then((curso) => {

        console.log(req.body);
        curso.markModified('Cuatrimestre');
        curso.markModified('Nombre');

        curso.save().then(() => {
            res.send("Curso Modificado");
        }).catch((error) => {
            if (error)
                throw error;
        });
    }).catch((error) => {
        if (error)
            throw error;
    });
});

module.exports = ruta;