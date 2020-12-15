const mongoose = require('mongoose');

mongoose.model('Pelicula',{
    IdPelicula:{
        type:Number,
        require: [true, 'Se requiere un ID para la película'],
        unique: true
    },
    Nombre:{
        type:String,
        requiere: [true,'Se requiere un nombre']
    },
    Genero:{
        type:String,
    },
    Duracion:{
        type:String,
        requiere: [true, 'Se requiere una duracion']
    },
    FechaEstreno: {
        type: Date,
        require: [true, 'Se necesita fecha de estreno']
    },
    Descripcion: {
        type: String,
        require: true,
        max: [100, 'El máximo es de 100 palabras']
    }
});