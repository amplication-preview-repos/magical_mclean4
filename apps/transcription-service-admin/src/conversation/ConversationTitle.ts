import { Conversation as TConversation } from "../api/conversation/Conversation";

export const CONVERSATION_TITLE_FIELD = "recordingUrl";

export const ConversationTitle = (record: TConversation): string => {
  return record.recordingUrl?.toString() || String(record.id);
};
