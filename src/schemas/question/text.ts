import { z } from "zod";
import { questionBaseSchema } from "./base";

export const textQuestionSchema = questionBaseSchema("text").extend({
  text: z.string(),
});

export type TextQuestion = z.infer<typeof textQuestionSchema>;
