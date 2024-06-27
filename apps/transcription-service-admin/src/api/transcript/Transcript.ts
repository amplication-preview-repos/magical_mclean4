import { Conversation } from "../conversation/Conversation";
import { PolishRequest } from "../polishRequest/PolishRequest";

export type Transcript = {
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  polishRequests?: Array<PolishRequest>;
  speaker: string | null;
  text: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
