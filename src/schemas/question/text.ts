import { z } from "zod";
import { questionBaseSchema } from "./base";

export const textQuestionSchema = questionBaseSchema("text").extend({
  suggestedResponses: z.array(z.string()).optional(),
});

export type TextQuestion = z.infer<typeof textQuestionSchema>;
