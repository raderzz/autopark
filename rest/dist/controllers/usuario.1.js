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
const categoria_1 = require("../models/categoria");
const categoria_2 = require("../dao/categoria");
class CategoriaController {
    getCategorias(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaDAO = new categoria_2.default();
            try {
                res.json(yield categoriaDAO.listarTodos());
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
    getCategoria(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaDAO = new categoria_2.default();
            try {
                const categoria = new categoria_1.default();
                categoria.setId(req.params.id);
                res.json(yield categoriaDAO.buscarPorId(categoria));
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
    newCategoria(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaDAO = new categoria_2.default();
            const categoria = new categoria_1.default();
            categoria.fromJson(req.body);
            try {
                res.json(yield categoriaDAO.cadastrar(categoria));
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
    editCategoria(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaDAO = new categoria_2.default();
            const categoria = new categoria_1.default();
            categoria.fromJson(req.body);
            try {
                res.json(yield categoriaDAO.editar(categoria));
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
}
exports.default = CategoriaController;
//# sourceMappingURL=usuario.1.js.map