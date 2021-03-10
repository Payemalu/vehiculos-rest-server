const { response, request } = require('express');


const vehiculosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const vehiculosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - vehiculosPost',
        nombre,
        edad
    });
}

const vehiculosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - vehiculosPut',
        id
    });
}

const vehiculosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - vehiculosPatch'
    });
}

const vehiculosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - vehiculosDelete'
    });
}




module.exports = {
    vehiculosGet,
    vehiculosPost,
    vehiculosPut,
    vehiculosPatch,
    vehiculosDelete,
}