import { InputJsonValue } from "../../types";
import { TranscriptWhereUniqueInput } from "../transcript/TranscriptWhereUniqueInput";

export type PolishRequestCreateInput = {
  result?: InputJsonValue;
  status?: "Option1" | null;
  transcript?: TranscriptWhereUniqueInput | null;
};
