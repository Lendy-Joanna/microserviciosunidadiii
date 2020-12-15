const mongoose = require("mongoose");

const MongoURI= "mongodb+srv://test:test@cluster0.oa4ly.mongodb.net/Microservicios?retryWrites=true&w=majority";

const MongoServer = async() => {
    try {
        await mongoose.connect(MongoURI, {
            useNewUrlParser: true
        });
        console.log("Conectado a la Base de Datos de MongoDB Atlas!!")
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = MongoServer;