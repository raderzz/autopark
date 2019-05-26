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
const estado_1 = require("../dao/estado");
class DiversoController {
    getEstados(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const estadoDAO = new estado_1.default();
            try {
                res.json(yield estadoDAO.listarTodos());
            }
            catch (err) {
                next(createError(500, err.stack));
            }
        });
    }
}
exports.default = DiversoController;
//# sourceMappingURL=diverso.js.map