const { Router } = require('express');

const {
    vehiculosGet,
    vehiculosPut,
    vehiculosPost,
    vehiculosDelete,
    vehiculosPatch
} = require('../controllers/vehiculos');

const router = Router();


router.get('/', vehiculosGet);

router.put('/:id', vehiculosPut);

router.post('/', vehiculosPost);

router.delete('/', vehiculosDelete);

router.patch('/', vehiculosPatch);





module.exports = router;