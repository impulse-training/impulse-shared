import { z } from "zod";
import { questionBaseSchema } from "./base";

export const textQuestionSchema = questionBaseSchema("text");

export type TextQuestion = z.infer<typeof textQuestionSchema>;
