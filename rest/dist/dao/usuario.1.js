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
const usuario_1 = require("../models/usuario");
const usuario_2 = require("../schemas/usuario");
const bson_1 = require("bson");
class UsuariosDAO extends dao_1.default {
    constructor() {
        super();
        this.name = 'usuarios';
    }
    listarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model('usuarios', usuario_2.default);
                const usuarios = yield Model
                    .find({})
                    .select({ senha: 0 })
                    .exec();
                return this.parse(usuarios, usuario_1.default);
            }
            catch (err) {
                throw err;
            }
        });
    }
    buscarPorId(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model('usuarios', usuario_2.default);
                const usuarios = yield Model
                    .find({ _id: new bson_1.ObjectId(usuario.getId()) })
                    .select({ senha: 0 })
                    .exec();
                return this.parse(usuarios, usuario_1.default);
            }
            catch (err) {
                throw err;
            }
        });
    }
    cadastrar(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model('usuarios', usuario_2.default);
                const document = new Model(usuario);
                yield document.save();
                return true;
            }
            catch (err) {
                throw err;
            }
        });
    }
    editar(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model('usuarios', usuario_2.default);
                console.log(usuario.getId());
                yield Model.updateOne({ _id: new bson_1.ObjectId(usuario.getId()) }, usuario);
                return true;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = UsuariosDAO;
//# sourceMappingURL=usuario.1.js.map