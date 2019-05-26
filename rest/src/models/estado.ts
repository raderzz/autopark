import IModel from '../interfaces/imodel';


class Estado implements IModel {

  private id: string;
  private nome: string;
  private sigla: string;

  fromJson(document: any): Estado {
    this.id = document.id;
    this.nome = document.nome;
    this.sigla = document.sigla;

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

  public getSigla(): string {
    return this.sigla;
  }

  public setSigla(sigla: string): void {
    this.sigla = sigla;
  }

  /* #endregion */
}

export default Estado;