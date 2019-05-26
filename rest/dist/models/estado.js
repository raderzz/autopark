"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estado {
    fromJson(document) {
        this.id = document.id;
        this.nome = document.nome;
        this.sigla = document.sigla;
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
    getSigla() {
        return this.sigla;
    }
    setSigla(sigla) {
        this.sigla = sigla;
    }
}
exports.default = Estado;
//# sourceMappingURL=estado.js.map