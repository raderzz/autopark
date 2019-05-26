import express = require('express');

import { Router } from 'express';

import CategoriaController from '../controllers/categoria';

const router: Router = express.Router();

const controller: CategoriaController = new CategoriaController();

router.get('/', controller.getCategorias);

router.get('/:id', controller.getCategoria);

router.post('/novo', controller.newCategoria);

router.post('/:id', controller.editCategoria);

export default router;
