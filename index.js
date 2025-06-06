const express = require('express');
const connectDB = require('./config/mongodb');
const futbolRoutes = require('./routes/futbolRoutes');

const app = express();
app.use(express.json());  // Para poder leer el body de las solicitudes en formato JSON

connectDB();

// Rutas de la API
app.use('/', futbolRoutes);

// Puerto donde escuchará el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en el puerto ${PORT}`);
});
