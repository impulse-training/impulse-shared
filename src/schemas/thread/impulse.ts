import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.extend({
  type: z.literal("impulse"),
  behaviorDocs: z.array(documentReferenceSchema),
  isSuccess: z.boolean().optional(),
  allImpulseQuestionsAnsweredAt: timestampSchema.optional(),
  debriefAfter: timestampSchema.optional(),
  debriefFinishedAt: timestampSchema.nullable(),
  outcomeSelectedAt: timestampSchema.optional(),
});

export type ImpulseThread = z.infer<typeof impulseThreadSchema>;
