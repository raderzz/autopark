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
        required: true,
        index: true,
        unique: true
    }
};
exports.definition = definition;
const schema = new mongoose_1.Schema(definition);
exports.schema = schema;
exports.default = schema;
//# sourceMappingURL=usuario_short.1.js.map