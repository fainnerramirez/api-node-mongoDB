const express = require('express');
const router = express.Router();
const Futbolista = require('../models/futbolModel');

//GET
router.get('/listadenombres', async function (request, response) {
    try {
        const futbolistas = await Futbolista.find(); // Recuperamos todos los futbolistas
        response.status(200).json(futbolistas);
    } catch (err) {
        response.status(500).json({ message: 'Error al obtener futbolistas', error: err });
    }
});

//POST
router.post('/listadenombres', async function (request, response){

    const { nuevoNombre } = request.body;

    if (!nuevoNombre) {
        return response.status(400).json({ message: 'El nombre es requerido' });
    }

    try {
        const futbolista = new Futbolista({ names: [nuevoNombre] });
        await futbolista.save();
        response.status(201).json(futbolista);
    } catch (err) {
        response.status(500).json({ message: 'Error al guardar futbolista', error: err });
    }
});

module.exports = router;