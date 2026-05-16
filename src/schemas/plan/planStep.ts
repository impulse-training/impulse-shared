import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";

export const fixedTacticStepSchema = z.object({
  type: z.literal("fixedTactic"),
  tacticRef: documentReferenceSchema,
});

export const collectionPickStepSchema = z.object({
  type: z.literal("collectionPick"),
  collectionId: z.string(),
  label: z.string().optional(),
});

export const planStepSchema = z.discriminatedUnion("type", [
  fixedTacticStepSchema,
  collectionPickStepSchema,
]);

export type PlanStep = z.infer<typeof planStepSchema>;
export type FixedTacticStep = z.infer<typeof fixedTacticStepSchema>;
export type CollectionPickStep = z.infer<typeof collectionPickStepSchema>;
