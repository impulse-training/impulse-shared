import z from "zod";
import { logBaseSchema } from "./base";

// Summary Log Schema
export const summaryLogSchema = logBaseSchema.extend({
  type: z.literal("summary"),
  // Summary logs are always displayed in the UI
  isDisplayable: z.literal(true),
  data: z.object({
    summary: z.string(),
  }),
});

export type SummaryLog = z.infer<typeof summaryLogSchema>;
