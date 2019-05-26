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
const usuario_1 = require("../dao/usuario");
const usuario_2 = require("../models/usuario");
beforeAll(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const conexao = new conexaomongo_1.default();
        yield conexao.abrir('mongodb://localhost/autoparking');
    });
});
it('cadastrar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = new usuario_2.default();
        usuario.setNome('Teste');
        usuario.setEmail('teste123@abc.com');
        usuario.setSenha('123');
        usuario.setCelular('(11) 11111-1111');
        usuario.setEndereco('Rua X');
        usuario.setNumero('1');
        usuario.setEstado('5ca3dd3613481e9011eaaab0');
        usuario.setCidade('Mogi das Cruzes');
        usuario.setCep('11111-111');
        const usuarioDAO = new usuario_1.default();
        const cadastrado = yield usuarioDAO.cadastrar(usuario);
        expect(cadastrado).toBeTruthy();
    });
});
it('listarTodos', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let encontrado = false;
        const usuario = new usuario_2.default();
        usuario.setEmail('teste123@abc.com');
        const usuarioDAO = new usuario_1.default();
        const usuarios = yield usuarioDAO.listarTodos();
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].getEmail() === usuario.getEmail()) {
                encontrado = true;
                break;
            }
        }
        expect(encontrado).toBeTruthy();
    });
});
it('editar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = new usuario_2.default();
        usuario.setId('5cb35d3dd50a172070fd790a');
        usuario.setNome('claudio2');
        const usuarioDAO = new usuario_1.default();
        const cadastrado = yield usuarioDAO.editar(usuario);
        expect(cadastrado).toBeTruthy();
    });
});
it('buscarPorId', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = new usuario_2.default();
        usuario.setId('5cb35d3dd50a172070fd790a');
        usuario.setNome('claudio2');
        const usuarioDAO = new usuario_1.default();
        const usuarios = yield usuarioDAO.buscarPorId(usuario);
        expect(usuario.getNome()).toBe(usuarios[0].getNome());
    });
});
//# sourceMappingURL=usuario.js.map