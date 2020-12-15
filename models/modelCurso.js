const mongoose = require('mongoose');

mongoose.model('Curso', {
    CursoNo: {
        type: Number,
        require: true,
        unique: true
    },
    Nombre: {
        type: String,
        require: true,
        max: [100, 'El maximo es de 100 palabras']
    },
    Descripcion: {
        type: String,
        require: true,
        max: [100, 'El maximo es de 100 palabras']
    },
    Cuatrimestre: {
        type: Number,
        require: true
    },
    FechaInicio: {
        type: Date,
        require: true
    },
    FechaFin: {
        type: Date,
        require: true,
    }
});
