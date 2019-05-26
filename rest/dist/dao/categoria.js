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
const categoria_1 = require("../models/categoria");
const categoria_2 = require("../schemas/categoria");
const bson_1 = require("bson");
class CategoriaDAO extends dao_1.default {
    constructor() {
        super();
        this.name = 'categoria';
    }
    listarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model(this.name, categoria_2.default);
                const categorias = yield Model
                    .find({})
                    .select({})
                    .exec();
                return this.parse(categorias, categoria_1.default);
            }
            catch (err) {
                throw err;
            }
        });
    }
    buscarPorId(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model(this.name, categoria_2.default);
                const categorias = yield Model
                    .find({ _id: new bson_1.ObjectId(categoria.getId()) })
                    .select({ senha: 0 })
                    .exec();
                return this.parse(categorias, categoria_1.default);
            }
            catch (err) {
                throw err;
            }
        });
    }
    cadastrar(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model(this.name, categoria_2.default);
                const document = new Model(categoria);
                yield document.save();
                return true;
            }
            catch (err) {
                throw err;
            }
        });
    }
    editar(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model(this.name, categoria_2.default);
                yield Model.updateOne({ _id: new bson_1.ObjectId(categoria.getId()) }, categoria);
                return true;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = CategoriaDAO;
//# sourceMappingURL=categoria.js.map