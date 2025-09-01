import { z } from "zod";
import { documentReferenceSchema } from "../../utils";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.extend({
  type: z.literal("impulse"),
  behaviorDocs: z.array(documentReferenceSchema),
  isSuccess: z.boolean().optional(),
});

export type ImpulseThread = z.infer<typeof impulseThreadSchema>;
