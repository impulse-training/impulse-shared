import * as yup from "yup";
import { timestampSchema } from "../utils";

export const sessionSchema = yup.object({
  participantUids: yup.array().of(yup.string()).required(),
  startTime: timestampSchema,
  durationMinutes: yup.number().required(),
  title: yup.string(),
  transcriptSummary: yup.string(),
  code: yup.string().required(),
});

export type Session = yup.InferType<typeof sessionSchema>;
