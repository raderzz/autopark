"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const vaga_1 = require("../controllers/vaga");
const router = express.Router();
const controller = new vaga_1.default();
router.get('/', controller.getVagas);
router.get('/:id', controller.getVaga);
router.post('/novo', controller.newVaga);
router.post('/:id', controller.editVaga);
exports.default = router;
//# sourceMappingURL=vagas.js.map