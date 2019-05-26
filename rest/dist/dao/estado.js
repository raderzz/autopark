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
const dao_1 = require("./dao");
const estado_1 = require("../models/estado");
const estado_2 = require("../schemas/estado");
class EstadoDAO extends dao_1.default {
    constructor() {
        super();
        this.name = 'estado';
    }
    listarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model(this.name, estado_2.default);
                const estados = yield Model.find({});
                return this.parse(estados, estado_1.default);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = EstadoDAO;
//# sourceMappingURL=estado.js.map