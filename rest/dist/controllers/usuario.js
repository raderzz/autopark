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
const createError = require("http-errors");
const usuario_1 = require("../models/usuario");
const usuario_2 = require("../dao/usuario");
class UsuarioController {
    getUsuarios(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioDAO = new usuario_2.default();
            try {
                res.json(yield usuarioDAO.listarTodos());
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
    getUsuario(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioDAO = new usuario_2.default();
            const usuario = new usuario_1.default();
            usuario.setId(req.params.id);
            try {
                res.json(yield usuarioDAO.buscarPorId(usuario));
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
    newUsuario(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioDAO = new usuario_2.default();
            const usuario = new usuario_1.default();
            usuario.fromJson(req.body);
            try {
                res.json(yield usuarioDAO.cadastrar(usuario));
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
    editUsuario(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioDAO = new usuario_2.default();
            const usuario = new usuario_1.default();
            usuario.fromJson(req.body);
            try {
                res.json(yield usuarioDAO.editar(usuario));
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
}
exports.default = UsuarioController;
//# sourceMappingURL=usuario.js.map