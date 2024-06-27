import { Transcript } from "../transcript/Transcript";
import { User } from "../user/User";

export type Conversation = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  recordingUrl: string | null;
  startTime: Date | null;
  transcripts?: Array<Transcript>;
  updatedAt: Date;
  user?: User | null;
};
