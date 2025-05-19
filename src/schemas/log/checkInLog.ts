import * as yup from "yup";
import { objectOf } from "../../utils";
import { questionSchema } from "../question";
import { logBaseSchema } from "./base";

export const checkInLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["check_in"]).required(),
  data: yup.object({
    questions: yup.array().of(questionSchema),
    // TODO: type the answers more specifically
    answersByQuestionId: objectOf(yup.mixed().required()),
  }),
});

export type CheckInLog = yup.InferType<typeof checkInLogSchema>;
