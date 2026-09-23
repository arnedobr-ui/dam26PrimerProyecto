

const service = require('../services/productosService');

console.log("CONTROLADOR");


const obtenerTodos = async (req, res) => {

    // Validacion
    // const productos = await service.obtenerTodos();
    // res.json(productos);


    try {
        const data = await service.obtenerTodos();
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: 'Error al obtener' });
    }

    
}


const obtenerPorId = async (req, res) => {

    console.log(req.params.id);

    const id = req.params.id
    try {
        const data = await service.obtenerPorId(id);
        res.json(data);
    } catch (error) {
      
        res.status(500).json({error: 'Error al obtener por ID'})
    }

}


const obtenerUltimo = (req, res) =>{}

module.exports = { obtenerTodos, obtenerUltimo, obtenerPorId };