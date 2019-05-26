"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Categoria {
    fromJson(document) {
        this.id = document.id;
        this.nome = document.nome;
        this.descricao = document.descricao;
        this.valor = document.valor;
        return this;
    }
    /* #region Getters e Setters */
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getDescricao() {
        return this.descricao;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
}
exports.default = Categoria;
//# sourceMappingURL=estado.1.js.map