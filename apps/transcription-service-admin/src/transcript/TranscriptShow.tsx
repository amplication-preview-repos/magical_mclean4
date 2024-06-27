import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TRANSCRIPT_TITLE_FIELD } from "./TranscriptTitle";
import { CONVERSATION_TITLE_FIELD } from "../conversation/ConversationTitle";

export const TranscriptShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Conversation"
          source="conversation.id"
          reference="Conversation"
        >
          <TextField source={CONVERSATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="speaker" source="speaker" />
        <TextField label="text" source="text" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PolishRequest"
          target="transcriptId"
          label="PolishRequests"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="result" source="result" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="Transcript"
              source="transcript.id"
              reference="Transcript"
            >
              <TextField source={TRANSCRIPT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
