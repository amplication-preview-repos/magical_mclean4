import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { TRANSCRIPT_TITLE_FIELD } from "../transcript/TranscriptTitle";

export const PolishRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
