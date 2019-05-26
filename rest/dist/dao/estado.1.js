"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const estado_1 = require("../models/estado");
const dao_1 = require("./dao");
class EstadosDAO extends dao_1.default {
    constructor() {
        super('estados', estado_1.schema);
    }
    listarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estados = yield mongoose_1.models.estados.find({});
                return this.parse(estados, estado_1.default);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = EstadosDAO;
//# sourceMappingURL=estado.1.js.map