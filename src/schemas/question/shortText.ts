import { z } from "zod";
import { questionBaseSchema } from "./base";

export const shortTextQuestionSchema = questionBaseSchema("shortText").extend({
  suggestedResponses: z.array(z.string()).optional(),
});

export type ShortTextQuestion = z.infer<typeof shortTextQuestionSchema>;
