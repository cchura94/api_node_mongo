const express = require("express");
const userController = require("./../controllers/user.controller")
const transaccionController = require("./../controllers/transaccion.controller");
const Transaccion = require("../schemas/Transaccion");

const Route = express.Router();
// CRUD de Usuarios
Route.get("/usuario", userController.funListar);
Route.post("/usuario", userController.funGuardar);
Route.get("/usuario/:id", userController.funMostrar);
Route.put("/usuario/:id", userController.funModificar);
Route.delete("/usuario/:id", userController.funEliminar);

// CRUD de Transacciones
Route.get("/transaccion/filtro/:tipo/:monto", transaccionController.funGatosMayores);


Route.get("/transaccion/:page", transaccionController.funListarPaginacion);

Route.get("/transaccion", transaccionController.funListar);
Route.post("/transaccion", transaccionController.funGuardar);
Route.get("/transaccion/:id", transaccionController.funMostrar);
Route.put("/transaccion/:id", transaccionController.funModificar);
Route.delete("/transaccion/:id", transaccionController.funEliminar);

// Agregaciones (match, group, sort)
Route.get("/transaccion/resumen/gastos", async (req, res) => {
    const resumen = await Transaccion.aggregate([
        {$match: {tipo: "gasto"}},
        {
            $group: {
                _id: "$usuarioId",
                totalGastado: {$sum: "$monto"},
                cantidad: {$sum: 1}
            }
        },
        {
            $lookup: {
                from: "usuarios",
                localField: "_id",
                foreignField: "_id",
                as: "usuario"
            }
        },
        {$unwind: "$usuario"},
        {
            $project: {
                _id: 0,
                usuarioId: "$usuario._id",
                nombreUsuario: "$usuario.nombre",
                totalGastado: 1,
                cantidad: 1
            }
        },
        { $sort: {totalGastado: -1} }
    ]);

    return res.json(resumen);
});

module.exports = Route;