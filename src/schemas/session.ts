import * as yup from "yup";
import { timestampSchema } from "../utils";

export const sessionSchema = yup.object({
  participantUids: yup.array().of(yup.string()).required(),
  timestamp: timestampSchema,
  title: yup.string(),
  transcriptSummary: yup.string(),
});

export type Session = yup.InferType<typeof sessionSchema>;
