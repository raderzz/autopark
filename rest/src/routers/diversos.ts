import express = require('express');

import { Router } from 'express';

import DiversoController from '../controllers/diverso';

const router: Router = express.Router();

const controller: DiversoController = new DiversoController();

router.get('/estados', controller.getEstados);

export default router;
