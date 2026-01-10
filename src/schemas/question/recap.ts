import z from "zod";
import { questionBaseSchema } from "./base";

export const recapQuestionSchema = questionBaseSchema("recap");

export type RecapQuestion = z.infer<typeof recapQuestionSchema>;
