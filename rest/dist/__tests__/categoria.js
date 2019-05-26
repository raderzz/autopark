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
const categoria_1 = require("../dao/categoria");
const categoria_2 = require("../models/categoria");
beforeAll(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const conexao = new conexaomongo_1.default();
        yield conexao.abrir('mongodb://localhost/autoparking');
    });
});
it('cadastrar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const categoria = new categoria_2.default();
        categoria.setNome('Teste2');
        categoria.setDescricao('Testando');
        categoria.setAndar('Térreo');
        categoria.setValor(10);
        const categoriaDAO = new categoria_1.default();
        const cadastrado = yield categoriaDAO.cadastrar(categoria);
        expect(cadastrado).toBeTruthy();
    });
});
it('listarTodos', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let encontrado = false;
        const categoria = new categoria_2.default();
        categoria.setNome('Teste2');
        const categoriaDAO = new categoria_1.default();
        const categorias = yield categoriaDAO.listarTodos();
        for (let i = 0; i < categorias.length; i++) {
            if (categorias[i].getNome() === categoria.getNome()) {
                encontrado = true;
                break;
            }
        }
        expect(encontrado).toBeTruthy();
    });
});
it('editar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const categoria = new categoria_2.default();
        categoria.setId('5cc0d11547d10f26147b8f0f');
        categoria.setNome('Teste4');
        const categoriaDAO = new categoria_1.default();
        const cadastrado = yield categoriaDAO.editar(categoria);
        expect(cadastrado).toBeTruthy();
    });
});
it('buscarPorId', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const categoria = new categoria_2.default();
        categoria.setId('5cc0d11547d10f26147b8f0f');
        categoria.setNome('Teste4');
        const categoriaDAO = new categoria_1.default();
        const categorias = yield categoriaDAO.buscarPorId(categoria);
        expect(categoria.getNome()).toBe(categorias[0].getNome());
    });
});
//# sourceMappingURL=categoria.js.map