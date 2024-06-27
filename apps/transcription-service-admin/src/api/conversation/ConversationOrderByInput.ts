import { SortOrder } from "../../util/SortOrder";

export type ConversationOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  recordingUrl?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
