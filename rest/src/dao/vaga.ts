import { Document } from 'mongoose';

import DAO from './dao';
import Vaga from '../models/vaga';
import schema from '../schemas/vaga';
import { ObjectId } from 'bson';

class VagaDAO extends DAO {

  constructor() {
    super();
    this.name = 'vaga';
  }

  async listarTodos(): Promise<Vaga[]> {
    try {
      const Model = this.model(this.name, schema);
      const vagas: Document[] = await Model
        .find({})
        .select({})
        .exec();
      return this.parse(vagas, Vaga) as Vaga[];
    } catch (err) {
      throw err;
    }
  }

  async buscarPorId(vaga: Vaga): Promise<Vaga[]> {
    try {
      const Model = this.model(this.name, schema);
      const vagas: Document[] = await Model
        .find({ _id: new ObjectId(vaga.getId()) })
        .select({ senha: 0 })
        .exec();
      return this.parse(vagas, Vaga) as Vaga[];
    } catch (err) {
      throw err;
    }
  }

  async cadastrar(vaga: Vaga): Promise<boolean> {
    try {
      console.log(325235)
      const Model = this.model(this.name, schema);
      const document: Document = new Model(vaga);
      await document.save();
      return true;
    } catch (err) {
      throw err;
    }
  }

  async editar(vaga: Vaga): Promise<boolean> {
    try {
      const Model = this.model(this.name, schema);
      await Model.updateOne({ _id: new ObjectId(vaga.getId()) }, vaga);     
      return true;
    } catch (err) {
      throw err;
    }
  }

}

export default VagaDAO;