import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ConversationTitle } from "../conversation/ConversationTitle";
import { PolishRequestTitle } from "../polishRequest/PolishRequestTitle";

export const TranscriptCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="conversation.id"
          reference="Conversation"
          label="Conversation"
        >
          <SelectInput optionText={ConversationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="polishRequests"
          reference="PolishRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PolishRequestTitle} />
        </ReferenceArrayInput>
        <TextInput label="speaker" source="speaker" />
        <TextInput label="text" multiline source="text" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
