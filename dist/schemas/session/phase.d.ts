import { z } from "zod";
export declare const sessionPhaseSchema: z.ZodEnum<["regulate", "debrief", "contain"]>;
export type SessionPhase = z.infer<typeof sessionPhaseSchema>;
export declare const isPostDebriefPhase: (phase?: SessionPhase) => boolean;
