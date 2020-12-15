const mongoose = require('mongoose');

//definimos el esquema de la colección estudiante
mongoose.model('Estudiante',{
    NumeroControl: {
        type: mongoose.SchemaTypes.Number, //Tipo de dato
        required: [true, 'Se requiere un Número de Control'],
        unique: true //El valor es único dentro de la colección
    },
    Nombre: {
        type: String,
        required: [true, 'Se requiere un nombre para el estudiante'],
        lowercase: true, //Se almacenará en minúsculas
        minlenght: [3, 'Se requiere al menos tres carácteres']
    },
    Apellidos: {
        type: String,
        lowercase: true,
        required: [true, 'Se requieren Apellidos para el estudiante'],
        minlenght: [3, 'El número mínimo de carácteres es 3']
    },
    Edad: {
        type: Number,
        required: true,
        min: [1, 'La edad mínima es 1'],
        max: [120, 'La edad máxima es 120']
    },
    Email: {
        type: String,
        lowercase: true,
        required: [true,'Se requiere un correo electrónico']
    }
});
