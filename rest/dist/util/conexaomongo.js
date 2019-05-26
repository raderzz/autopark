"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class ConexaoMongo {
    abrir(str) {
        mongoose.connect(str, { useNewUrlParser: true });
    }
}
exports.default = ConexaoMongo;
//# sourceMappingURL=conexaomongo.js.map