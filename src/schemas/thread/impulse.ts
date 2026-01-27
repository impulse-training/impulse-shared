import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.extend({
  type: z.literal("impulse"),
  behaviorDocs: z.array(documentReferenceSchema),
  debriefAfter: timestampSchema.optional(),
  debriefBefore: timestampSchema.optional(),
  debriefUrgeLogInsertedAt: timestampSchema.optional(),
  outcomeSelectedAt: timestampSchema.optional(),
  actedOnUrge: z.boolean().nullable().optional(), // true = acted, false = resisted, null/undefined = not answered
});

export type ImpulseThread = z.infer<typeof impulseThreadSchema>;
