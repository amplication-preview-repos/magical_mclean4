import { Transcript as TTranscript } from "../api/transcript/Transcript";

export const TRANSCRIPT_TITLE_FIELD = "speaker";

export const TranscriptTitle = (record: TTranscript): string => {
  return record.speaker?.toString() || String(record.id);
};
