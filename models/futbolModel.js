const mongoose = require('mongoose');

const futbolistasSchema = new mongoose.Schema({
  names: [String], // Especificamos que será un arreglo de cadenas de texto
});

const Futbolista = mongoose.model('Futbolistas', futbolistasSchema);

module.exports = Futbolista;
