import { z } from "zod";
import { questionBaseSchema } from "./base";

export const recapQuestionSchema = questionBaseSchema("recap").extend({
  text: z.string(),
});

export type RecapQuestion = z.infer<typeof recapQuestionSchema>;
