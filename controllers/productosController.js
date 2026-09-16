

const service = require('../services/productosService');

console.log("CONTROLADOR");


const obtenerTodos = (req, res) => {

    // Validacion

    const productos = service.obtenerTodos();
    res.json(productos);
    
}



const obtenerUltimo = (req, res) =>{}



module.exports = { obtenerTodos, obtenerUltimo };