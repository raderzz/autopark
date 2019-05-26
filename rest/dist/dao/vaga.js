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
const vaga_1 = require("../models/vaga");
const vaga_2 = require("../schemas/vaga");
const bson_1 = require("bson");
class VagaDAO extends dao_1.default {
    constructor() {
        super();
        this.name = 'vaga';
    }
    listarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model(this.name, vaga_2.default);
                const vagas = yield Model
                    .find({})
                    .select({})
                    .exec();
                return this.parse(vagas, vaga_1.default);
            }
            catch (err) {
                throw err;
            }
        });
    }
    buscarPorId(vaga) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model(this.name, vaga_2.default);
                const vagas = yield Model
                    .find({ _id: new bson_1.ObjectId(vaga.getId()) })
                    .select({ senha: 0 })
                    .exec();
                return this.parse(vagas, vaga_1.default);
            }
            catch (err) {
                throw err;
            }
        });
    }
    cadastrar(vaga) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(325235);
                const Model = this.model(this.name, vaga_2.default);
                const document = new Model(vaga);
                yield document.save();
                return true;
            }
            catch (err) {
                throw err;
            }
        });
    }
    editar(vaga) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Model = this.model(this.name, vaga_2.default);
                yield Model.updateOne({ _id: new bson_1.ObjectId(vaga.getId()) }, vaga);
                return true;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = VagaDAO;
//# sourceMappingURL=vaga.js.map