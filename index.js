const express = require('express');

require('dotenv').config();

const cors = require('cors');

const app = express();

app.use(cors());









app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor funcionando ✅' });
});


app.use('/api/productos',  require('./routes/productosRoutes'));



//app.use('/api/categorias', require('./routes/categoriaRoutes'))









app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
