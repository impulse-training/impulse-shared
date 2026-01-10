import { z } from "zod";
import { questionStepBaseSchema } from "./base";

export const textQuestionStepSchema = questionStepBaseSchema(
  "question-text"
).extend({
  suggestedResponses: z.array(z.string()).optional(),
});

export type TextQuestionStep = z.infer<typeof textQuestionStepSchema>;
