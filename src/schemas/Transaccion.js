const mongoose = require("./conexion");

const TransaccionSchema = mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true        
    },
    tipo:{
        type: String,
        enum: ['ingreso', 'gasto'],
        required: true
    },
    monto: {
        type: Number,
        required: true,
        min: 0
    },
    descripcion: {
        type: String
    },
    fecha: {
        type: Date,
        required: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaccion', TransaccionSchema);