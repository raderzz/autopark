"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const categoria_1 = require("../controllers/categoria");
const router = express.Router();
const controller = new categoria_1.default();
router.get('/', controller.getCategorias);
router.get('/:id', controller.getCategoria);
router.post('/novo', controller.newCategoria);
router.post('/:id', controller.editCategoria);
exports.default = router;
//# sourceMappingURL=categorias.js.map