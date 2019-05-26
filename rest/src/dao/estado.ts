import { Document } from 'mongoose';

import DAO from './dao';
import Estado from '../models/estado';
import schema from '../schemas/estado';

class EstadoDAO extends DAO {

  constructor () {
    super();
    this.name = 'estado';
  }

  async listarTodos(): Promise<Estado[]> {
    try {
      const Model = this.model(this.name, schema);
      const estados: Document[] = await Model.find({});

      return this.parse(estados, Estado) as Estado[];
    } catch (err) {
      throw err;
    }
  }

}

export default EstadoDAO;