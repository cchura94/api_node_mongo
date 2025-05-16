const Transaccion = require("./../schemas/Transaccion");

async function funListar(req, res) {
  const transacciones = await Transaccion.find().populate('usuarioId');
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

module.exports = {
  funListar,
  funGuardar,
  funMostrar,
  funModificar,
  funEliminar,
};
