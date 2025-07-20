import * as yup from "yup";
import { questionBaseSchema } from "./base";

export const slider1To10QuestionSchema = questionBaseSchema(
  "slider1To10"
).shape({
  sliderConfig: yup
    .object({
      minLabel: yup.string(),
      maxLabel: yup.string(),
    })
    .required(),
});

export type Slider1To10Question = yup.InferType<
  typeof slider1To10QuestionSchema
>;
