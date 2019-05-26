"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const categoria_1 = require("../selenium/categoria");
const router = express.Router();
const controller = new categoria_1.default();
router.get('/selenium/categorias', controller.newCategoria);
exports.default = router;
//# sourceMappingURL=test.js.map