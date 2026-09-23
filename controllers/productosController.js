

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


const crear = async (req, res) => {

  
    try {
        const data = await service.crear(req.body)
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Error al crear"});
    }

}


const eliminar = async (req, res) => {
 

    try {
        const data = await service.eliminar(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Error al eliminar"})
    }


}


const actualizar = async (req, res) => {
    try {
        const data = await service.actualizar(req.body);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({error:"error al actualizar"})
        
    }
}

const obtenerUltimo = (req, res) =>{}

module.exports = { obtenerTodos, obtenerUltimo, obtenerPorId, crear, eliminar, actualizar };