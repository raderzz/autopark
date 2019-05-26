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
const estado_1 = require("../../models/estado");
const estados = [
    new estado_1.default().fromJson({
        "id": "5ca3dd3613481e9011eaaab0",
        "nome": "Acre",
        "sigla": "AC"
    }),
    new estado_1.default().fromJson({
        "id": "5ca3dd3613481e9011eaaab1",
        "nome": "Alagoas",
        "sigla": "AL"
    })
];
class EstadoDAO {
    listarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return estados;
        });
    }
}
exports.default = EstadoDAO;
//# sourceMappingURL=estado.js.map