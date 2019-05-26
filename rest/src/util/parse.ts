import { ObjectId } from "bson";

function objectIdToString(id: ObjectId): string {
  return id ? id.toString() : undefined;
}

export {
  objectIdToString
}