const { Schema, model } = require('mongoose');

const VehiculoSchema = Schema({
    description: {
        type: String,
        required: [true, 'Escriba una descripción']
    },
    make: {
        type: String,
        required: [true, 'Escriba el nombre de la marca']
    },
    model: {
        type: String,
        required: [true, 'Escriba el nombre del modelo']
    },
    estimatedate: {
        type: Date,
        required: [true, 'Ingrese una fecha correcta']
    },
    id: {
        type: Number,
        unique: true
    },
    km: {
        type: Number,
        required: [true, 'Ingrese el kilometraje']
    },
    image: {
        type: String
    },
    google: {
        type: Boolean,
        default: false
    }
});



VehiculoSchema.methods.toJSON = function() {
    const { __v, password, ...vehiculo } = this.toObject();
    return vehiculo;
}

module.exports = model('Vehiculo', VehiculoSchema);