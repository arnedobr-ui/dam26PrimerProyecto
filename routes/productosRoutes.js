// localHost:3000/api/productos

const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/productosController');


console.log("ENRUTADOR");

router.get('/', ctrl.obtenerTodos);
router.get('/ultimo', ctrl.obtenerUltimo);
router.get('/:id', ctrl.obtenerPorId);


router.post('/crear', ctrl.crear);

router.post('/eliminar', ctrl.eliminar);


router.post('/actualizar', ctrl.actualizar);

module.exports = router;





