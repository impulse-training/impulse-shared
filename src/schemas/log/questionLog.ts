import * as yup from "yup";
import { questionSchema } from "../question";
import { logBaseSchema } from "./base";

export const questionLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["question"]).required(),
  // Question logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      questionId: yup.string().required(),
      question: questionSchema,
      response: yup.mixed().nullable().default(null), // This will store the user's response
    })
    .required(),
});

export type QuestionLog = yup.InferType<typeof questionLogSchema>;
