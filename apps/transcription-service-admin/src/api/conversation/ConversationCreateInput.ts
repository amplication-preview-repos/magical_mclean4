import { TranscriptCreateNestedManyWithoutConversationsInput } from "./TranscriptCreateNestedManyWithoutConversationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationCreateInput = {
  endTime?: Date | null;
  recordingUrl?: string | null;
  startTime?: Date | null;
  transcripts?: TranscriptCreateNestedManyWithoutConversationsInput;
  user?: UserWhereUniqueInput | null;
};
