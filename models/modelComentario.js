const mongoose = require('mongoose');

mongoose.model('Comentario',{
    IdComentario:{
        type:Number,
        require: [true, 'Se requiere un ID para comentario'],
        unique: true
    },
    IdPelicula:{
        type:String,
        require: [true, 'Se requiere un ID de película']
    },
    IdUsuario:{
        type:String,
        requiere: [true,'Se requiere un ID de usuario']
    },
    Analisis:{
            type: String,
            require: true,
            max: [500, 'El máximo es de 500 carácteres']
    },
    Calificacion:{
        type:Number,
        require: [true, 'Se requiere la calificacion'],
        min: [1, 'La calificacion minima es 1'],
        max: [10, 'La calificacion Maxima es 10']
    }
});