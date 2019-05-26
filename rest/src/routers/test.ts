import express = require('express');

import { Router } from 'express';

import CategoriaSelenium from '../selenium/categoria';

const router: Router = express.Router();

const controller: CategoriaSelenium = new CategoriaSelenium();

router.get('/selenium/categorias', controller.newCategoria);

export default router;
