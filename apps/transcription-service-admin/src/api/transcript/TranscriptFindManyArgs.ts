import { TranscriptWhereInput } from "./TranscriptWhereInput";
import { TranscriptOrderByInput } from "./TranscriptOrderByInput";

export type TranscriptFindManyArgs = {
  where?: TranscriptWhereInput;
  orderBy?: Array<TranscriptOrderByInput>;
  skip?: number;
  take?: number;
};
