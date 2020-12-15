const mongoose = require('mongoose');

mongoose.model('EstudianteCurso', {
    NumeroControl: {
        type: mongoose.SchemaTypes.Number, 
        required: true
    },
    CursoNo: {
        type: mongoose.SchemaTypes.Number,
        require: true
    },
    Puntuacion: {
        type: Number,
        require: true
    },
    Terminado: {
        type: mongoose.SchemaTypes.Boolean,
        require: true,
        default: false
    }
    });