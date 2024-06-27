import { SortOrder } from "../../util/SortOrder";

export type TranscriptOrderByInput = {
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  speaker?: SortOrder;
  text?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
