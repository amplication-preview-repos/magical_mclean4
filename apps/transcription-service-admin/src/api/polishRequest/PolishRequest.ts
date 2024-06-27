import { JsonValue } from "type-fest";
import { Transcript } from "../transcript/Transcript";

export type PolishRequest = {
  createdAt: Date;
  id: string;
  result: JsonValue;
  status?: "Option1" | null;
  transcript?: Transcript | null;
  updatedAt: Date;
};
