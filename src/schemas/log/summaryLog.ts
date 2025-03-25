import * as yup from "yup";
import { logBaseSchema } from "./base";

// Impulse Log Schema
export const summaryLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["summary"]).required(),
  // Impulse logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup.object({
    summary: yup.string().required(),
  }),
});

export type SummaryLog = yup.InferType<typeof summaryLogSchema>;
