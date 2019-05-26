import IModel from '../interfaces/imodel';
import { objectIdToString } from '../util/parse';

class Usuario implements IModel {

  private id: string;
  private nome: string;
  private email: string;
  private senha: string;
  private telefone: string;
  private celular: string;
  private endereco: string;
  private numero: string;
  private cidade: string;
  private estado: string;
  private cep: string;
  private nivel: number;
  private ativo: boolean;

  fromJson(document: any): Usuario {
    this.id = document.id;
    this.nome = document.nome;
    this.email = document.email;
    this.senha = document.senha;
    this.telefone = document.telefone;
    this.celular = document.celular;
    this.endereco = document.endereco;
    this.numero = document.numero;
    this.cidade = document.cidade;
    this.estado = objectIdToString(document.estado); 
    this.cep = document.cep;
    this.nivel = document.nivel;
    this.ativo = document.ativo;

    return this;
  }

  /* #region Getters e Setters */

  public getId(): string {
    return this.id;
  }

  public setId(id: string
  ): void {
    this.id = id;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string
  ): void {
    this.nome = nome;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string
  ): void {
    this.email = email;
  }

  public getSenha(): string {
    return this.senha;
  }

  public setSenha(senha: string
  ): void {
    this.senha = senha;
  }

  public getTelefone(): string {
    return this.telefone;
  }

  public setTelefone(telefone: string
  ): void {
    this.telefone = telefone;
  }

  public getCelular(): string {
    return this.celular;
  }

  public setCelular(celular: string
  ): void {
    this.celular = celular;
  }

  public getEndereco(): string {
    return this.endereco;
  }

  public setEndereco(endereco: string
  ): void {
    this.endereco = endereco;
  }

  public getNumero(): string {
    return this.numero;
  }

  public setNumero(numero: string
  ): void {
    this.numero = numero;
  }

  public getCidade(): string {
    return this.cidade;
  }

  public setCidade(cidade: string
  ): void {
    this.cidade = cidade;
  }

  public getEstado(): string {
    return this.estado;
  }

  public setEstado(estado: string
  ): void {
    this.estado = estado;
  }

  public getCep(): string {
    return this.cep;
  }

  public setCep(cep: string
  ): void {
    this.cep = cep;
  }

  public getNivel(): number {
    return this.nivel;
  }

  public setNivel(nivel: number): void {
    this.nivel = nivel;
  }

  public isAtivo(): boolean {
    return this.ativo;
  }

  public setAtivo(ativo: boolean): void {
    this.ativo = ativo;
  }

  /* #endregion */
}

export default Usuario;