import { z } from "zod";
import { logBaseSchema } from "./base";

export const resistedLogSchema = logBaseSchema.extend({
  type: z.literal("resisted"),
  // Behavior tracked logs are always displayed in the UI
  isDisplayable: z.literal(true),
});

export type ResistedLog = z.infer<typeof resistedLogSchema>;
