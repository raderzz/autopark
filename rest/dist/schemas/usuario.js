"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bson_1 = require("bson");
const definition = {
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: false
    },
    celular: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: false
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: bson_1.ObjectId,
        required: true,
        ref: 'Estado'
    },
    cep: {
        type: String,
        required: true
    },
    nivel: {
        type: Number,
        required: true,
        default: 1
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
//# sourceMappingURL=usuario.js.map