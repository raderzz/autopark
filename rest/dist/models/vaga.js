"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse_1 = require("../util/parse");
class Vaga {
    fromJson(document) {
        this.id = document.id;
        this.numero = document.numero;
        this.localizacao = document.localizacao;
        this.categoria = parse_1.objectIdToString(document.categoria);
        this.ativo = document.ativo;
        return this;
    }
    /* #region Getters e Setters */
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getLocalizacao() {
        return this.localizacao;
    }
    setLocalizacao(localizacao) {
        this.localizacao = localizacao;
    }
    getCategoria() {
        return this.categoria;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    isAtivo() {
        return this.ativo;
    }
    setAtivo(ativo) {
        this.ativo = ativo;
    }
}
exports.default = Vaga;
//# sourceMappingURL=vaga.js.map