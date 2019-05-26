import { Schema, SchemaDefinition } from "mongoose";
import { ObjectId } from "bson";

const definition: SchemaDefinition = {
  numero: {
    type: String,
    required: true
  },
  localizacao: {
    type: Number,
    required: false
  },
  categoria: {
    type: ObjectId,
    required: true,
    ref: 'Categoria'
  },
  ativo: {
    type: Boolean,
    required: true,
    default: true
  }
};

const schema: Schema = new Schema(definition);

export default schema;
export {
  definition, schema
};