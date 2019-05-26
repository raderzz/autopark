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
const estado_1 = require("../dao/estado");
const estado_2 = require("../models/estado");
jest.mock('../dao/estado');
it('listarTodos', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let encontrado = false;
        const estado = new estado_2.default();
        estado.setSigla('Acre');
        const estadoDAO = new estado_1.default();
        const estados = yield estadoDAO.listarTodos();
        for (let i = 0; i < estados.length; i++) {
            if (estados[i].getSigla() === estado.getSigla()) {
                encontrado = true;
                break;
            }
        }
        expect(encontrado).toBeTruthy();
    });
});
//# sourceMappingURL=estado.js.map