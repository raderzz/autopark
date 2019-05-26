import mongoose = require('mongoose');
import { SchemaDefinition, Schema, models, Document } from 'mongoose';
import IModel from '../interfaces/imodel';

abstract class DAO {
  
  protected name: string;

  constructor() {
  }

  protected model(name: string, schemaDefinition: SchemaDefinition) {
    const schema: Schema = new Schema(schemaDefinition);

    if (!models[name]) {
      mongoose.model(name, schema);
    }    

    return models[name];
  }

  protected parse(documents: Document[], Model: new () => IModel): IModel[] {
    return documents.map(document => new Model().fromJson(document));
  }

}

export default DAO;