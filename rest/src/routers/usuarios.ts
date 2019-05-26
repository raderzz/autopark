import express = require('express');

import { Router } from 'express';

import UsuarioController from '../controllers/usuario';

const router: Router = express.Router();

const controller: UsuarioController = new UsuarioController();

router.get('/', controller.getUsuarios);

router.get('/:id', controller.getUsuario);

router.post('/novo', controller.newUsuario);

router.post('/:id', controller.editUsuario);

export default router;
