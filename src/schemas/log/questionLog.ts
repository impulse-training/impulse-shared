import * as yup from "yup";
import { questionSchema, responseTypeSchema } from "../question";
import { logBaseSchema } from "./base";

const responseSchema = yup.object({
  responseType: responseTypeSchema,
  value: yup.mixed(),
  formattedValue: yup.string(),
  color: yup.string(),
  iconName: yup.string(),
});
export type Response = yup.InferType<typeof responseSchema>;

export const questionLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["question"]).required(),
  // Question logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      questionId: yup.string(),
      question: questionSchema,
      response: responseSchema.optional().default(undefined),
    })
    .required(),
});

export type QuestionLog = yup.InferType<typeof questionLogSchema>;
