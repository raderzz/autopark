"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
function init() {
    const collection = 'estados';
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
    const schema = new mongoose_1.Schema(definition);
    const model = mongoose.model(collection, schema);
    return {
        collection, definition, schema, model
    };
}
exports.default = init;
//# sourceMappingURL=estado.js.map