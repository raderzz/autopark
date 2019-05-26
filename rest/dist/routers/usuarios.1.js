"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const usuario_1 = require("../controllers/usuario");
const router = express.Router();
const controller = new usuario_1.default();
router.get('/', controller.getUsuarios);
router.get('/:id', controller.getUsuario);
router.post('/novo', controller.newUsuario);
router.post('/:id', controller.editUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.1.js.map