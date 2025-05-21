const Transaccion = require("./../schemas/Transaccion");

async function funListar(req, res) {
  const transacciones = await Transaccion.find().populate('usuarioId');
  return res.status(200).json(transacciones);
}

async function funListarPaginacion(req, res) {
  const page = parseInt(req.params.page) || 1;
  const limit = 2;
  const skip = (page - 1) * limit;
  const transacciones = await Transaccion.find().populate('usuarioId').skip(skip).limit(limit);
  return res.status(200).json(transacciones);
}


function funGuardar(req, res) {

    try {
        const datos = req.body;
      
        const transacc = new Transaccion(datos);
        transacc.save().then(() => console.log("transaccion registrado"));
      
        return res.json({ mensaje: "Guardando...", usuario: transacc });
        
    } catch (error) {
        return res.json({ error: error });

    }
}

function funMostrar(req, res) {}

function funModificar(req, res) {}

function funEliminar(req, res) {}

async function funGatosMayores(req, res){
  const { tipo, monto } = req.params;

  const resultado = await Transaccion.find({
    tipo: tipo,
    monto: {$gt: parseFloat(monto)}
  }).sort({fecha: -1});

  return res.json(resultado);
}



module.exports = {
  funListar,
  funGuardar,
  funMostrar,
  funModificar,
  funEliminar,
  funGatosMayores,
  funListarPaginacion
};
