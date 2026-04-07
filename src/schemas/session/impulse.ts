import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { sessionBaseSchema } from "./base";

export const impulseSessionSchema = sessionBaseSchema.extend({
  type: z.literal("impulse"),
  behaviorDocs: z.array(documentReferenceSchema),
  debriefAfter: timestampSchema.optional(),
  debriefBefore: timestampSchema.optional(),
  debriefUrgeLogInsertedAt: timestampSchema.nullable().optional(),
  actedOnUrge: z.boolean().nullable().optional(), // true = acted, false = resisted, null/undefined = not answered
  generatedPlanId: z.string().optional(),
});

export type ImpulseSession = z.infer<typeof impulseSessionSchema>;
