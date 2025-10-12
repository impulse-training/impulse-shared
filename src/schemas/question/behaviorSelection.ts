import { z } from "zod";
import { questionBaseSchema } from "./base";

export const behaviorSelectionQuestionSchema = questionBaseSchema("behaviorSelection").extend({
  // Array of behavior IDs that can be selected
  allowedBehaviorIds: z.array(z.string()).optional(),
  // Whether multiple behaviors can be selected
  allowMultiple: z.boolean().optional().default(true),
});

export type BehaviorSelectionQuestion = z.infer<typeof behaviorSelectionQuestionSchema>;
