"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const diverso_1 = require("../controllers/diverso");
const router = express.Router();
const controller = new diverso_1.default();
router.get('/estados', controller.getEstados);
exports.default = router;
//# sourceMappingURL=diversos.1.js.map