"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Categoria {
    fromJson(document) {
        this.id = document.id;
        this.nome = document.nome;
        this.descricao = document.descricao;
        this.andar = document.andar;
        this.valor = document.valor;
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
    getAndar() {
        return this.andar;
    }
    setAndar(andar) {
        this.andar = andar;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
    isAtivo() {
        return this.ativo;
    }
    setAtivo(ativo) {
        this.ativo = ativo;
    }
}
exports.default = Categoria;
//# sourceMappingURL=categoria.js.map