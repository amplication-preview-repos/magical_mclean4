import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { PolishRequestUpdateManyWithoutTranscriptsInput } from "./PolishRequestUpdateManyWithoutTranscriptsInput";

export type TranscriptUpdateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  polishRequests?: PolishRequestUpdateManyWithoutTranscriptsInput;
  speaker?: string | null;
  text?: string | null;
  timestamp?: Date | null;
};
