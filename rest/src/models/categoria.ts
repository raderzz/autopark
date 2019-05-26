import IModel from '../interfaces/imodel';

class Categoria implements IModel {

  private id: string;
  private nome: string;
  private descricao: string;
  private andar: string;
  private valor: number;
  private ativo: boolean;

  fromJson(document: any): Categoria {
    this.id = document.id;
    this.nome = document.nome;
    this.descricao = document.descricao;
    this.andar = document.andar;
    this.valor = document.valor;
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

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

  public getAndar(): string {
    return this.andar;
  }

  public setAndar(andar: string): void {
    this.andar = andar;
  }

  public getValor(): number {
    return this.valor;
  }

  public setValor(valor: number): void {
    this.valor = valor;
  }

  public isAtivo(): boolean {
    return this.ativo;
  }

  public setAtivo(ativo: boolean): void {
    this.ativo = ativo;
  }

  /* #endregion */
}

export default Categoria;