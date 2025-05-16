const express = require("express");
const Routes = require("./routes/index");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/saludo/:nombre", function(req, res){
    const nombre = req.params.nombre;
    console.log(`Hola ${nombre}, Saludos`)
    return res.send(`Hola ${nombre}, Saludos`);
});

app.use("/api", Routes);

// levantar el servidor
app.listen(PORT, function(){
    console.log("Servidor levantado en puerto: "+PORT);
});