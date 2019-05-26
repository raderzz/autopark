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
const conexaomongo_1 = require("../util/conexaomongo");
const vaga_1 = require("../dao/vaga");
const vaga_2 = require("../models/vaga");
beforeAll(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const conexao = new conexaomongo_1.default();
        yield conexao.abrir('mongodb://localhost/autoparking');
    });
});
it('cadastrar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const vaga = new vaga_2.default();
        vaga.setNumero('A35');
        vaga.setLocalizacao(1);
        vaga.setCategoria('5cb7ab3dfc3c41527541066b');
        const vagaDAO = new vaga_1.default();
        const cadastrado = yield vagaDAO.cadastrar(vaga);
        expect(cadastrado).toBeTruthy();
    });
});
it('listarTodos', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let encontrado = false;
        const vaga = new vaga_2.default();
        vaga.setNumero('A35');
        const vagaDAO = new vaga_1.default();
        const vagas = yield vagaDAO.listarTodos();
        for (let i = 0; i < vagas.length; i++) {
            if (vagas[i].getNumero() === vaga.getNumero()) {
                encontrado = true;
                break;
            }
        }
        expect(encontrado).toBeTruthy();
    });
});
it('cadastrar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const vaga = new vaga_2.default();
        vaga.setId('5cbf9c2a06f76d1f14cb92b8');
        vaga.setNumero('A2');
        const vagaDAO = new vaga_1.default();
        const cadastrado = yield vagaDAO.editar(vaga);
        expect(cadastrado).toBeTruthy();
    });
});
it('buscarPorId', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const vaga = new vaga_2.default();
        vaga.setId('5cbf9c2a06f76d1f14cb92b8');
        vaga.setNumero('A2');
        const vagaDAO = new vaga_1.default();
        const vagas = yield vagaDAO.buscarPorId(vaga);
        expect(vaga.getNumero()).toBe(vagas[0].getNumero());
    });
});
//# sourceMappingURL=vaga.js.map