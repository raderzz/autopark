import IModel from '../interfaces/imodel';
import { objectIdToString } from '../util/parse';

class Vaga implements IModel {

  private id: string;
  private numero: string;
  private localizacao: number;
  private categoria: string;
  private ativo: boolean;

  fromJson(document: any): Vaga {
    this.id = document.id;
    this.numero = document.numero;
    this.localizacao = document.localizacao;
    this.categoria = objectIdToString(document.categoria);
    this.ativo = document.ativo;

    return this;
  }

  /* #region Getters e Setters */

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getNumero(): string {
    return this.numero;
  }

  public setNumero(numero: string): void {
    this.numero = numero;
  }

  public getLocalizacao(): number {
    return this.localizacao;
  }

  public setLocalizacao(localizacao: number): void {
    this.localizacao = localizacao;
  }

  public getCategoria(): string {
    return this.categoria;
  }

  public setCategoria(categoria: string): void {
    this.categoria = categoria;
  }

  public isAtivo(): boolean {
    return this.ativo;
  }

  public setAtivo(ativo: boolean): void {
    this.ativo = ativo;
  }

  /* #endregion */
}

export default Vaga;