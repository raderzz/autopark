import { Schema, SchemaDefinition } from "mongoose";
import { ObjectId } from "bson";

const definition: SchemaDefinition = {
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: false
  },
  celular: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  numero: {
    type: String,
    required: false
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: ObjectId,
    required: true,
    ref: 'Estado'
  },
  cep: {
    type: String,
    required: true
  },
  nivel: {
    type: Number,
    required: true,
    default: 1
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