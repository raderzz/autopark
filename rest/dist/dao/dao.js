"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
class DAO {
    constructor() {
    }
    model(name, schemaDefinition) {
        const schema = new mongoose_1.Schema(schemaDefinition);
        if (!mongoose_1.models[name]) {
            mongoose.model(name, schema);
        }
        return mongoose_1.models[name];
    }
    parse(documents, Model) {
        return documents.map(document => new Model().fromJson(document));
    }
}
exports.default = DAO;
//# sourceMappingURL=dao.js.map