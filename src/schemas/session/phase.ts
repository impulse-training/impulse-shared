import { z } from "zod";

export const sessionPhaseSchema = z.enum([
  "regulate",
  "shift",
  "reengage",
  "debrief",
]);

export type SessionPhase = z.infer<typeof sessionPhaseSchema>;
