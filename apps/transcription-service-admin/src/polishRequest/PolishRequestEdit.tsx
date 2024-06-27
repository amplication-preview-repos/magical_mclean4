import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { TranscriptTitle } from "../transcript/TranscriptTitle";

export const PolishRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="transcript.id"
          reference="Transcript"
          label="Transcript"
        >
          <SelectInput optionText={TranscriptTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
