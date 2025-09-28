import { z } from "zod";
import { documentReferenceSchema, timestampSchema } from "../../utils";
import { suggestedTacticsLogSchema } from "../log";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.extend({
  type: z.literal("impulse"),
  behaviorDocs: z.array(documentReferenceSchema),
  isSuccess: z.boolean().optional(),
  allImpulseQuestionsAnsweredAt: timestampSchema.optional(),
  debriefAfter: timestampSchema.optional(),
  debriefFinishedAt: timestampSchema.optional(),
  suggestedTactics: suggestedTacticsLogSchema.optional(),
});

export type ImpulseThread = z.infer<typeof impulseThreadSchema>;
