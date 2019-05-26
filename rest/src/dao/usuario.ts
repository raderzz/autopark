import { Document } from 'mongoose';

import DAO from './dao';
import Usuario from '../models/usuario';
import schema from '../schemas/usuario';
import { ObjectId } from 'bson';

class UsuarioDAO extends DAO {

  constructor() {
    super();
    this.name = 'usuario';
  }

  async listarTodos() {
    try {
      const Model = this.model(this.name, schema);
      const usuarios: Document[] = await Model
        .find({})
        .select({ senha: 0 })
        .exec();
      return this.parse(usuarios, Usuario) as Usuario[];
    } catch (err) {
      throw err;
    }
  }

  async buscarPorId(usuario: Usuario): Promise<Usuario[]> {
    try {
      const Model = this.model(this.name, schema);
      const usuarios: Document[] = await Model
        .find({ _id: new ObjectId(usuario.getId()) })
        .select({ senha: 0 })
        .exec();
      return this.parse(usuarios, Usuario) as Usuario[];
    } catch (err) {
      throw err;
    }
  }

  async cadastrar(usuario: Usuario): Promise<boolean> {
    try {
      const Model = this.model(this.name, schema);
      const document: Document = new Model(usuario);      
      await document.save();
      return true;
    } catch (err) {
      throw err;
    }
  }

  async editar(usuario: Usuario): Promise<boolean> {
    try {
      const Model = this.model(this.name, schema);
      await Model.updateOne({ _id: new ObjectId(usuario.getId()) }, usuario);     
      return true;
    } catch (err) {      
      throw err;
    }
  }

}

export default UsuarioDAO;