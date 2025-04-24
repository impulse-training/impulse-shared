import * as yup from "yup";
import { questionBaseSchema } from "./base";

export const multipleChoiceQuestionSchema = questionBaseSchema("multiple_choice").shape({
  suggestedResponses: yup.array().of(yup.string()).required().min(1),
});

export type MultipleChoiceQuestion = yup.InferType<typeof multipleChoiceQuestionSchema>;
