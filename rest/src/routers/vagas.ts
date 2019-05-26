import express = require('express');

import { Router } from 'express';

import VagaController from '../controllers/vaga';

const router: Router = express.Router();

const controller: VagaController = new VagaController();

router.get('/', controller.getVagas);

router.get('/:id', controller.getVaga);

router.post('/novo', controller.newVaga);

router.post('/:id', controller.editVaga);

export default router;
