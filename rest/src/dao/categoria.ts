import { Document } from 'mongoose';

import DAO from './dao';
import Categoria from '../models/categoria';
import schema from '../schemas/categoria';
import { ObjectId } from 'bson';

class CategoriaDAO extends DAO {

  constructor() {
    super();
    this.name = 'categoria';
  }

  async listarTodos(): Promise<Categoria[]> {
    try {
      const Model = this.model(this.name, schema);
      const categorias: Document[] = await Model
        .find({})
        .select({})
        .exec();
      return this.parse(categorias, Categoria) as Categoria[];
    } catch (err) {
      throw err;
    }
  }

  async buscarPorId(categoria: Categoria): Promise<Categoria[]> {
    try {
      const Model = this.model(this.name, schema);
      const categorias: Document[] = await Model
        .find({ _id: new ObjectId(categoria.getId()) })
        .select({ senha: 0 })
        .exec();
      return this.parse(categorias, Categoria) as Categoria[];
    } catch (err) {
      throw err;
    }
  }

  async cadastrar(categoria: Categoria): Promise<boolean> {
    try {
      const Model = this.model(this.name, schema);
      const document: Document = new Model(categoria);
      await document.save();
      return true;
    } catch (err) {
      throw err;
    }
  }

  async editar(categoria: Categoria): Promise<boolean> {
    try {
      const Model = this.model(this.name, schema);
      await Model.updateOne({ _id: new ObjectId(categoria.getId()) }, categoria);     
      return true;
    } catch (err) {
      throw err;
    }
  }

}

export default CategoriaDAO;