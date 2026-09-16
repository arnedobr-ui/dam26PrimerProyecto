const productos = [
  { id: 1, nombre: 'Notebook Actualizada', precio: 500000 },
  { id: 2, nombre: 'Mouse',    precio: 15000  },
  { id: 3, nombre: 'Teclado',  precio: 25000  },
];

console.log("SERVICIO");

const supabase = require('../config/supabase');




const obtenerTodos = async () => {

   
  //return productos

   const { data, error } = await supabase
    .from('producto')
    .select('*');

  if (error) throw error;
  
  return data;

}


module.exports = { obtenerTodos};