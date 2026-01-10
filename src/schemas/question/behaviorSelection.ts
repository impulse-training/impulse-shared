import z from "zod";
import { questionBaseSchema } from "./base";

export const behaviorSelectionQuestionSchema = questionBaseSchema("behaviorSelection").extend({
  // Whether multiple behaviors can be selected
  allowMultiple: z.boolean().optional().default(true),
});

export type BehaviorSelectionQuestion = z.infer<typeof behaviorSelectionQuestionSchema>;
