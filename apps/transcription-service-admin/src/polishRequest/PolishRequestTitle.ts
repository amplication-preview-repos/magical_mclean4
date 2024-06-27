import { PolishRequest as TPolishRequest } from "../api/polishRequest/PolishRequest";

export const POLISHREQUEST_TITLE_FIELD = "id";

export const PolishRequestTitle = (record: TPolishRequest): string => {
  return record.id?.toString() || String(record.id);
};
