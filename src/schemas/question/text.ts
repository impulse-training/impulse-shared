import * as yup from "yup";
import { questionBaseSchema } from "./base";

export const textQuestionSchema = questionBaseSchema("text").shape({
  suggestedResponses: yup
    .array()
    .of(yup.string().required())
    .optional()
    .default(undefined),
});

export type TextQuestion = yup.InferType<typeof textQuestionSchema>;
