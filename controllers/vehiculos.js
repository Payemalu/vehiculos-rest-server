const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const vehiculosGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [total, vehiculos] = await Promise.all([
        Vehiculo.countDocuments(query),
        Vehiculo.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.json({
        total,
        vehiculos
    });
}

const vehiculosPost = async(req, res = response) => {

    const { image, make, model, description, estimatedate, id, km } = req.body;
    const vehiculo = new Vehiculo({ image, make, model, description, estimatedate, id, km });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    vehiculo.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await vehiculo.save();

    res.json({
        vehiculo
    });
}

const vehiculosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if (password) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const vehiculo = await Vehiculo.findByIdAndUpdate(id, resto);

    res.json(usuario);
}

const vehiculosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - vehiculosPatch'
    });
}

const vehiculosDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const vehiculo = await Vehiculo.findByIdAndDelete( id );

    const vehiculo = await Vehiculo.findByIdAndUpdate(id, { estado: false });


    res.json(usuario);
}




module.exports = {
    vehiculosGet,
    vehiculosPost,
    vehiculosPut,
    vehiculosPatch,
    vehiculosDelete,
}