import { z } from "zod";
export declare const sessionPhaseSchema: z.ZodEnum<["regulate", "debrief"]>;
export type SessionPhase = z.infer<typeof sessionPhaseSchema>;
