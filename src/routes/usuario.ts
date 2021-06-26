import { Router }  from 'express';

const router = Router();

import { getUsuarios, getUsuario, deleteUsuario, createUsuario, updateUsuario, getUsuarioXcorreo } from '../controllers/usuario.controller'

//ruta para get y post /usuarios
router.route('/usuarios').post(createUsuario).get(getUsuarios);

router.route('/usuarios/:id').get(getUsuario).delete(deleteUsuario).put(updateUsuario);
router.route('/usuarios/correo/:correo').get(getUsuarioXcorreo)

export default router;