import z from "zod";
import { questionBaseSchema } from "./base";

export const emotionQuestionSchema = questionBaseSchema("emotion").extend({
  suggestedResponses: z.array(z.string()).optional(),
});

export type EmotionQuestion = z.infer<typeof emotionQuestionSchema>;
