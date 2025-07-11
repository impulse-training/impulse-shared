import * as yup from "yup";
import { questionBaseSchema } from "./base";

export const recapQuestionSchema = questionBaseSchema("recap");

export type RecapQuestion = yup.InferType<typeof recapQuestionSchema>;
