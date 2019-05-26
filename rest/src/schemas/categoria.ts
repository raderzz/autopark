import { Schema, SchemaDefinition } from "mongoose";

const definition: SchemaDefinition = {
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: false
  },
  andar: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
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