import * as yup from "yup";
import { Timestamp } from "../types";
import { timestampSchema } from "../utils";

export interface ExternalSenderSession {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  expiresAt: Timestamp;
  systemMessage: string;
}

export const externalSenderSessionSchema = yup.object().shape({
  createdAt: timestampSchema.required(),
  updatedAt: timestampSchema.required(),
  expiresAt: timestampSchema.required(),
  systemMessage: yup.string().required(),
});
