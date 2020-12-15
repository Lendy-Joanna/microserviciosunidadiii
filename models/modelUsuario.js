const mongoose = require('mongoose');

mongoose.model('Usuario',{
    IdUsuario:{
        type:Number,
        require: [true, 'Se requiere un ID de identificación'],
        unique: true
    },
    NameUser:{
        type:String,
        require: [true, 'Se requiere un nombre de Usuario'],
        minlenght: [5, 'Se necesitan al menos 5 carácteres'],
        maxlenght:[15, 'Solo se aceptan como máximo 15 carácteres']
    },
    Nombre:{
        type:String,
        requiere: [true,'Se requiere un nombre']
    },
    Apellidos:{
        type:String,
        requiere: [true, 'Se requieren apellidos']
    },
    Edad:{
        type:Number,
        require: [true, 'Se requiere la edad'],
        min: [1, 'La edad minima es 1'],
        max: [120, 'La edad Maxima es 120']
    }
});