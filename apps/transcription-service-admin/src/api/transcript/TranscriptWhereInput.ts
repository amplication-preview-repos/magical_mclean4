import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PolishRequestListRelationFilter } from "../polishRequest/PolishRequestListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TranscriptWhereInput = {
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  polishRequests?: PolishRequestListRelationFilter;
  speaker?: StringNullableFilter;
  text?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
