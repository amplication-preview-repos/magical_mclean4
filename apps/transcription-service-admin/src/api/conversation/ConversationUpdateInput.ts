import { TranscriptUpdateManyWithoutConversationsInput } from "./TranscriptUpdateManyWithoutConversationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationUpdateInput = {
  endTime?: Date | null;
  recordingUrl?: string | null;
  startTime?: Date | null;
  transcripts?: TranscriptUpdateManyWithoutConversationsInput;
  user?: UserWhereUniqueInput | null;
};
