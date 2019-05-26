"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    }
};
exports.definition = definition;
const schema = new mongoose_1.Schema(definition);
exports.schema = schema;
exports.default = schema;
//# sourceMappingURL=usuario_auth.js.map