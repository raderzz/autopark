import { Schema, SchemaDefinition, Model, Document } from "mongoose";

const definition: SchemaDefinition = {
  nome: {
    type: String,
    required: true
  },
  sigla: {
    type: String,
    required: true
  }
};

const schema: Schema = new Schema(definition);

export default schema;
export {
  definition, schema
};