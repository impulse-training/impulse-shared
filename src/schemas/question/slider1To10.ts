import * as yup from "yup";
import { questionBaseSchema } from "./base";

export const slider1To10QuestionSchema = questionBaseSchema(
  "slider1To10"
).shape({
  sliderConfig: yup
    .object({
      min: yup.number().required(),
      max: yup.number().required(),
      step: yup.number().default(1),
      minLabel: yup.string(),
      maxLabel: yup.string(),
      defaultValue: yup.number(),
    })
    .required(),
  suggestedResponses: yup.array().of(yup.string()).default([]),
});

export type Slider1To10Question = yup.InferType<
  typeof slider1To10QuestionSchema
>;
