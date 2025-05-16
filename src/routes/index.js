const express = require("express");
const userController = require("./../controllers/user.controller")
const transaccionController = require("./../controllers/transaccion.controller")

const Route = express.Router();
// CRUD de Usuarios
Route.get("/usuario", userController.funListar);
Route.post("/usuario", userController.funGuardar);
Route.get("/usuario/:id", userController.funMostrar);
Route.put("/usuario/:id", userController.funModificar);
Route.delete("/usuario/:id", userController.funEliminar);

// CRUD de Transacciones
Route.get("/transaccion", transaccionController.funListar);
Route.post("/transaccion", transaccionController.funGuardar);
Route.get("/transaccion/:id", transaccionController.funMostrar);
Route.put("/transaccion/:id", transaccionController.funModificar);
Route.delete("/transaccion/:id", transaccionController.funEliminar);

module.exports = Route;