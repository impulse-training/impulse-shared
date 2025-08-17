import { z } from "zod";
import { objectOf } from "../../utils";
import { questionSchema } from "../question";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.extend({
  type: z.literal("impulse"),
  // Present key, may be null
  behaviorId: z.string().nullable(),
  questionsCompleted: z.boolean().optional(),
  questionsById: objectOf(questionSchema),
});

export type ImpulseThread = z.infer<typeof impulseThreadSchema>;
