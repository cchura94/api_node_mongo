const Usuario = require("./../schemas/Usuario");

async function funListar(req, res){
    const usuarios = await Usuario.find();
    return res.status(200).json(usuarios);
}

function funGuardar(req, res){
    const datos = req.body;
    console.log(datos);

    const u = new Usuario(datos);
    u.save().then(() => console.log('usuario registrado'));

    return res.json({mensaje: "Guardando...", usuario: u});
}

async function funMostrar(req, res){
    try {
        const u = await Usuario.findById(req.params.id);
        
        return res.json(u);
        
    } catch (error) {
        return res.json({error: error});
    }

}

function funModificar(req, res){

}

function funEliminar(req, res){

}

module.exports = {
    funListar,
    funGuardar,
    funMostrar,
    funModificar,
    funEliminar
}
