import { Router }  from 'express';

const router = Router();

import { getOrdenes, getOrden, deleteOrden, createOrden, updateOrden } from '../controllers/orden.controller'

//ruta para get y post /usuarios
router.route('/ordenes').post(createOrden).get(getOrdenes);

router.route('/ordenes/:id').get(getOrden).delete(deleteOrden).put(updateOrden);

export default router;