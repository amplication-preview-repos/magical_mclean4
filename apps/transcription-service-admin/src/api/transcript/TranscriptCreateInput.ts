import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { PolishRequestCreateNestedManyWithoutTranscriptsInput } from "./PolishRequestCreateNestedManyWithoutTranscriptsInput";

export type TranscriptCreateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  polishRequests?: PolishRequestCreateNestedManyWithoutTranscriptsInput;
  speaker?: string | null;
  text?: string | null;
  timestamp?: Date | null;
};
