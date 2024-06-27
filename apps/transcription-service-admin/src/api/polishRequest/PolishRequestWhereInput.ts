import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TranscriptWhereUniqueInput } from "../transcript/TranscriptWhereUniqueInput";

export type PolishRequestWhereInput = {
  id?: StringFilter;
  result?: JsonFilter;
  status?: "Option1";
  transcript?: TranscriptWhereUniqueInput;
};
