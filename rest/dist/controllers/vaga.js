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
const vaga_1 = require("../models/vaga");
const vaga_2 = require("../dao/vaga");
class VagaController {
    getVagas(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const vagaDAO = new vaga_2.default();
            try {
                res.json(yield vagaDAO.listarTodos());
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
    getVaga(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const vagaDAO = new vaga_2.default();
            try {
                const vaga = new vaga_1.default();
                vaga.setId(req.params.id);
                res.json(yield vagaDAO.buscarPorId(vaga));
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
    newVaga(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const vagaDAO = new vaga_2.default();
            const vaga = new vaga_1.default();
            vaga.fromJson(req.body);
            try {
                res.json(yield vagaDAO.cadastrar(vaga));
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
    editVaga(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const vagaDAO = new vaga_2.default();
            const vaga = new vaga_1.default();
            vaga.fromJson(req.body);
            try {
                res.json(yield vagaDAO.editar(vaga));
            }
            catch (err) {
                next(createError(500, err));
            }
        });
    }
}
exports.default = VagaController;
//# sourceMappingURL=vaga.js.map