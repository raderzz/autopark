"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
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
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    }
};
exports.definition = definition;
const schema = new mongoose_1.Schema(definition);
exports.schema = schema;
exports.default = schema;
//# sourceMappingURL=usuario.1.js.map