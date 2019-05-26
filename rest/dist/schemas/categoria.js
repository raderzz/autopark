"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    andar: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    }
};
exports.definition = definition;
const schema = new mongoose_1.Schema(definition);
exports.schema = schema;
exports.default = schema;
//# sourceMappingURL=categoria.js.map