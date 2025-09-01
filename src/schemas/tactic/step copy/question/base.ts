import { z } from "zod";
import { timestampSchema } from "../../../../utils";
import { baseStepSchema } from "../base";

export function questionStepBaseSchema<T extends string>(mode: T) {
  return baseStepSchema.extend({
    mode: z.literal(mode),
    // Flatten question properties directly into the step schema
    id: z.string().optional(),
    createdAt: timestampSchema.optional(),
    updatedAt: timestampSchema.optional(),
    text: z.string().min(1), // The actual question content
  });
}
