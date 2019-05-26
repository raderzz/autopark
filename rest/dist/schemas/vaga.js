"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bson_1 = require("bson");
const definition = {
    numero: {
        type: String,
        required: true
    },
    localizacao: {
        type: Number,
        required: false
    },
    categoria: {
        type: bson_1.ObjectId,
        required: true,
        ref: 'Categoria'
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
//# sourceMappingURL=vaga.js.map