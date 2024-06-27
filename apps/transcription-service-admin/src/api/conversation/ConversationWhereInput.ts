import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TranscriptListRelationFilter } from "../transcript/TranscriptListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  recordingUrl?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  transcripts?: TranscriptListRelationFilter;
  user?: UserWhereUniqueInput;
};
