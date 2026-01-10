import z from "zod";
import { logBaseSchema } from "./base";

// Ready To Debrief Log Schema
// Simple marker/separator indicating the user finished a tactic flow and is ready to debrief.
export const readyToDebriefLogSchema = logBaseSchema.extend({
  type: z.literal("ready_to_debrief"),
  // Displayed in the UI as a thin separator/marker
  isDisplayable: z.literal(true),
});

export type ReadyToDebriefLog = z.infer<typeof readyToDebriefLogSchema>;
