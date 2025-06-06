const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        await mongoose.connect('mongodb+srv://fainnerexample:fainner123@cluster-jhon.2vghmgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-jhon');
        console.log('Conexión a MongoDB exitosa');
    } catch (err) {
        console.error('Error de conexión a MongoDB', err);
        process.exit(1);  // Terminamos el proceso si no se puede conectar
    }
};

module.exports = connectDB;