"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse_1 = require("../util/parse");
class Usuario {
    fromJson(document) {
        this.id = document.id;
        this.nome = document.nome;
        this.email = document.email;
        this.senha = document.senha;
        this.telefone = document.telefone;
        this.celular = document.celular;
        this.endereco = document.endereco;
        this.numero = document.numero;
        this.cidade = document.cidade;
        this.estado = parse_1.objectIdToString(document.estado);
        this.cep = document.cep;
        this.nivel = document.nivel;
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
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getSenha() {
        return this.senha;
    }
    setSenha(senha) {
        this.senha = senha;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    getCelular() {
        return this.celular;
    }
    setCelular(celular) {
        this.celular = celular;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getCidade() {
        return this.cidade;
    }
    setCidade(cidade) {
        this.cidade = cidade;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
    getNivel() {
        return this.nivel;
    }
    setNivel(nivel) {
        this.nivel = nivel;
    }
    isAtivo() {
        return this.ativo;
    }
    setAtivo(ativo) {
        this.ativo = ativo;
    }
}
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map