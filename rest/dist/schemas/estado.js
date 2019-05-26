"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    nome: {
        type: String,
        required: true
    },
    sigla: {
        type: String,
        required: true
    }
};
exports.definition = definition;
const schema = new mongoose_1.Schema(definition);
exports.schema = schema;
exports.default = schema;
//# sourceMappingURL=estado.js.map